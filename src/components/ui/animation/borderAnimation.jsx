export default function BorderAnimation() {
  return (
    <div className="relative h-0.5 w-full bg-transparent">
      <div className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-400 ease-linear group-hover:scale-x-100" />
    </div>
  );
}
