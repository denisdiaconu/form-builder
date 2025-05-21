type FormCardProps = {
  id: string;
  title: string;
  description?: string | null;
  responsesCount: number;
  createdAt: Date;
};

export default function FormCard({
  id,
  title,
  description,
  responsesCount,
  createdAt,
}: FormCardProps) {
  return <div>FormCard</div>;
}
