export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Progression globale</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Niveau actuel</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Tests réalisés</p>
          <p className="text-2xl font-semibold">0</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Dernier score</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
      </div>
    </div>
  );
}