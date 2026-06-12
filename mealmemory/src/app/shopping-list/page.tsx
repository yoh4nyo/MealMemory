import { ShoppingList } from "@/components/shopping/shopping-list";
import { PageHeader } from "@/components/ui/page-header";

export default function ShoppingListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Liste de courses"
        description="Une première version simple par rayons, avec cases cochables et actions rapides."
      />
      <ShoppingList />
    </div>
  );
}
