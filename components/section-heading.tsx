interface SectionHeadingProps {
  title: string
  id?: string
}

export function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className="text-4xl font-bold mb-8">
      {title}
    </h2>
  )
}
