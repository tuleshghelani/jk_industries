import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EnquiryService } from '../../services/enquiry.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { STATUS_OPTIONS } from 'src/app/shared/constants';
import { getLeadType } from 'src/app/shared/utils';
import { LoaderService } from '../../services/loader.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sender_name', 'lead_type', 'sender_company', 'sender_city',
     'sender_state', 'sender_mobile', 'subject', 'query_time', 'enquiry_status', 'action'];
  dataSource = new MatTableDataSource<any>([]);
  totalRecords = 0;
  currentPage = 1;
  pageSize = 10;
  orderBy = '';
  filterForm: FormGroup;
  isDownloading = false;
  goToPageNumber: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  statusOptions = STATUS_OPTIONS;

  constructor(
    private enquiryService: EnquiryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.filterForm = this.formBuilder.group({
      search: [''],
      enquiryStatus: [''],
      startDate: [''],
      endDate: [''],
      queryTypes: [[]]
    });
  }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  loadEnquiries(): void {
    const loaderId = 'enquiries-loader';
    this.loaderService.start(loaderId);
    const formValues = this.filterForm.value;

  // Process queryTypes
    let queryTypes: string[] = [];
    if (formValues.queryTypes) {
      formValues.queryTypes.forEach((type: string | string[]) => {
        if (Array.isArray(type)) {
          queryTypes = [...queryTypes, ...type];
        } else {
          queryTypes.push(type);
        }
      });
    }

    const params = {
      currentPage: this.currentPage,
      perPageRecord: this.pageSize,
      search: formValues.search,
      enquiryStatus: formValues.enquiryStatus,
      orderBy: this.orderBy,
      startDate: formValues.startDate ? this.formatDate(new Date(formValues.startDate)) : null,
      endDate: formValues.endDate ? this.formatDate(new Date(formValues.endDate)) : null,
      queryTypes: queryTypes.length > 0 ? queryTypes : null
    };

    this.enquiryService.searchEnquiries(params).subscribe({
      next: (response) => {
        this.dataSource.data = response.DATA.results;
        this.totalRecords = response.DATA.pagination.totalRecords;
        this.loaderService.stop(loaderId);
      },
      error: (error) => {
        this.loaderService.stop(loaderId);
        console.error('Error fetching enquiries', error);
      },
      complete: () => {
        this.loaderService.stop(loaderId);
      }
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadEnquiries();
  }

  onSubmit(): void {
    this.currentPage = 1;
    this.loadEnquiries();
  }

  onEnquiryDownload(): void {
    this.isDownloading = true;
    const formValues = this.filterForm.value;
    const params = {
      currentPage: this.currentPage,
      perPageRecord: this.pageSize,
      search: formValues.search,
      enquiryStatus: formValues.enquiryStatus,
      orderBy: this.orderBy,
      startDate: formValues.startDate ? this.formatDate(new Date(formValues.startDate)) : null,
      endDate: formValues.endDate ? this.formatDate(new Date(formValues.endDate)) : null
    };

    this.enquiryService.downloadEnquiries(params).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'enquiries.xlsx';
        a.click();
        this.isDownloading = false;
      },
      (error) => {
        console.error('Error fetching enquiries', error);
        this.isDownloading = false;
      }
    );
  }

  onSortChange(event: any): void {
    this.orderBy = event.active.toUpperCase();
    this.loadEnquiries();
  }

  getStatusText(status: string): string {
    const statusOption = this.statusOptions.find(option => option.value === status);
    return statusOption ? statusOption.viewValue : status;
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  onReset(): void {
    this.initializeForm();
    this.currentPage = 1;
    this.pageSize = 10;
    this.orderBy = '';
    if (this.sort) {
      this.sort.active = '';
      this.sort.direction = '';
    }
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.loadEnquiries();
  }


  initializeForm(): void {
    this.filterForm = this.formBuilder.group({
      search: [''],
      enquiryStatus: [''],
      startDate: [''],
      endDate: [''],
      queryTypes: [[]]
    });
  }

  onAction(enquiryId: number): void {
    this.router.navigate(['/enquiry-details', enquiryId]);
  }


  getLeadType = getLeadType;

  openWhatsApp(phoneNumber: string): void {
    // Remove any non-numeric characters from the phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '');

    // Add country code 91 if not present
    const fullNumber = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;

    // Create URLs for different scenarios
    const webUrl = `https://api.whatsapp.com/send/?phone=${fullNumber}&text&type=phone_number&app_absent=0`;
    const mobileAppUrl = `whatsapp://send?phone=${fullNumber}`;
    const desktopAppUrl = `whatsapp://send/?phone=${fullNumber}`;

    // Try to open WhatsApp app first
    const tryOpenApp = () => {
      const timeout = 2500;
      const start = Date.now();

      const handleVisibilityChange = () => {
        if (Date.now() - start > timeout) return;
        if (!document.hidden) {
          window.location.href = webUrl;
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      setTimeout(() => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }, timeout);

      // Try to open app
      window.location.href = mobileAppUrl;
    };

    // Check if mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      tryOpenApp();
    } else {
      // For desktop, try both desktop app and web version
      const link = document.createElement('a');
      link.href = desktopAppUrl;
      link.click();

      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 1000);
    }
  }

  get maxPage(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  goToPage(): void {
    if (this.goToPageNumber) {
      // Ensure the page number is within valid range
      const pageNumber = Math.max(1, Math.min(this.goToPageNumber, this.maxPage));

      // Update paginator
      if (this.paginator) {
        this.paginator.pageIndex = pageNumber - 1;
        this.currentPage = pageNumber;
        this.loadEnquiries();
      }
    }
  }
}
