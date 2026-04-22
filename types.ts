export interface ClientBrand {
  name: string;
  /** Optional static logo path (served from /public), e.g. /logos/company.png */
  logoPath?: string;
}

export type ProjectCategory = 'Institutional' | 'Residential' | 'Healthcare' | 'Infrastructure';

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  category: ProjectCategory;
  status: 'Completed' | 'Ongoing';
  description: string;
  scope: string[];
  image: string;
  year?: string;
  details?: {
    epc?: string;
    civil?: string;
    internalSystems?: string;
  };
}

export interface Attribute {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
