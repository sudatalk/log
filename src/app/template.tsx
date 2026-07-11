import CheckHeader from "@/components/CheckHeader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <CheckHeader>{children}</CheckHeader>
  );
}
