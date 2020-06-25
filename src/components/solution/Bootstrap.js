import { decode as atob } from 'base-64';

export default function Bootstrap() {
  return `
  <style>
    :root {
      --blue: #007bff;
      --indigo: #6610f2;
      --purple: #6f42c1;
      --pink: #e83e8c;
      --red: #dc3545;
      --orange: #fd7e14;
      --yellow: #ffc107;
      --green: #28a745;
      --teal: #20c997;
      --cyan: #17a2b8;
      --white: #fff;
      --gray: #6c757d;
      --gray-dark: #343a40;
      --primary: #007bff;
      --secondary: #6c757d;
      --success: #28a745;
      --info: #17a2b8;
      --warning: #ffc107;
      --danger: #dc3545;
      --light: #f8f9fa;
      --dark: #343a40;
      --breakpoint-xs: 0;
      --breakpoint-sm: 576px;
      --breakpoint-md: 768px;
      --breakpoint-lg: 992px;
      --breakpoint-xl: 1200px;
      --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-family: sans-serif;
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;
      background-color: #fff;
    }

    .container-fluid {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    .d-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }

    .flex-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }

    .w-100 {
      width: 100% !important;
    }

    .p-1 {
      padding: 0.25rem !important;
    }

    .table {
      width: 100%;
      margin-bottom: 1rem;
      background-color: transparent;
      border-collapse: collapse !important;
    }

    .table td,
    .table th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
      background-color: #fff !important;
    }

    .table-bordered {
      border: 1px solid #dee2e6;
    }

    .table-bordered th,
    .table-bordered td {
      border: 1px solid #dee2e6 !important;
    }

    .table-bordered thead th,
    .table-bordered thead td {
      border-bottom-width: 2px;
    }

    .table thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }

    .table tbody + tbody {
      border-top: 2px solid #dee2e6;
    }

    .table-striped tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .list-group {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
    }

    .list-group-item {
      position: relative;
      display: block;
      padding: 0.75rem 1.25rem;
      margin-bottom: -1px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .list-group-item:first-child {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }

    .list-group-item:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    .mb-3 {
      margin-bottom: 1rem !important;
    }

    @media (min-width: 576px) {
      .flex-sm-row {
        -ms-flex-direction: row !important;
        flex-direction: row !important;
      }

      .w-sm-50 {
        width: 50% !important;
      }
    }
  </style>
  `;
}
