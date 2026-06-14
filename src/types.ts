export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
};

export type Testimonial = {
  id: string;
  author: string;
  content: string;
  rating: number;
};

export interface AgentData {
  id: string;
  name: string;
  description: string;
  type: string;
  vani_agent_id: string;
  vani_workspace_id: string;
  created_at: string;
}
