export interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  isDocumentResult?: boolean;
  documentData?: PartyDocument;
  errorMsg?: string;
  timestamp: Date;
}

export interface PartyDocument {
  isValid: boolean;
  errorMsg?: string;
  title: string;
  header: {
    parentOrganization?: string;
    organization: string;
    subHeader: string;
    locationDate: string;
  };
  documentType?: string;
  excerpt?: string;
  bodyMarkdown: string;
  signature: {
    title: string;
    signerTitle?: string;
    name: string;
  };
  creatorCode?: string;
}

export interface DocumentTypePreset {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  placeholderText: string;
}

export interface AuthorPreset {
  id: string;
  name: string;
  subHeaderSuffix: string;
  defaultSignatureTitle: string;
}
