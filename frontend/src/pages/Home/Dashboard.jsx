import { useTheme } from '@/hooks/use-theme';
import Footer from '@/layouts/components/Footer';
import DashboardLayout from '@/layouts/DashboardLayout'

const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <DashboardLayout>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-50">Dashboard</div>
      <Footer />
    </DashboardLayout>
  )
}

export default Dashboard