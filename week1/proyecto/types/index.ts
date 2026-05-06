export interface Audit {
  id: string;
  clientName: string;
  clientIndustry: string;
  auditorName: string;
  auditDate: string;
  status: 'pending' | 'in_progress' | 'completed';
  findingsCount: number;
  imageUrl: string;
}