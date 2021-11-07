export interface Resource {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    id: number;
    employee_name: string;
    employee_salary: number;
    color: string;
    pantone_value: string;
  };
  support: {
    url: string;
    text: string;
  };
}
