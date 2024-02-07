export interface PayrollData {
  country: string;
  payroll: string;
  date: string;
  stage: string;
  critical: number;
  overdue: number
  due: number;
  querie: number;
}

export const ELEMENT_DATA: PayrollData[] = [
  {country: "CAN", payroll: 'Monthly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Fortnightly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Weekly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Monthly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Fortnightly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "CAN", payroll: 'Weekly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "France", payroll: 'Monthly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "UK", payroll: 'Weekly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "USA", payroll: 'Monthly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "India", payroll: 'Fortnightly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
  {country: "USA", payroll: 'Weekly Payroll Production staff', date: "29th March", stage: 'Collate', critical: 1, overdue: 1, due:1, querie: 1},
];