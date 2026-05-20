export interface Audit {
  id: string;
  clientName: string;
  industry: string;
  auditor: string;
  auditDate: string;
  status: 'pending' | 'in_progress' | 'completed';
  findings: number;
  imageUrl: string;
}