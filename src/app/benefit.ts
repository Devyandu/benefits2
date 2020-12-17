export interface Benefit {
  name: string;
  code: string;
  description: string;
}
export interface BenefitCategory {
  code: string;
  name: string;
  icon: string;
  benefits: Benefit[];
}
