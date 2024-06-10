import { deleteCompany } from '@/api/delete-company'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface CompanyAlertDeleteProps {
  id: string
}

export function CompanyAlertDelete({ id }: CompanyAlertDeleteProps) {
  const navigate = useNavigate()

  async function handleDeleteCompany() {
    try {
      await deleteCompany(id)
      navigate(0)
    } catch (error) {
      toast.error('Ocorreu um error ao tentar delete o parceiro.')
    }
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você tem certeza que deseja deletar essa empresa?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação não pode ser desfeita. Isso irá excluir permanentemente os
          dados dessa companhia.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDeleteCompany}
          className="bg-destructive hover:bg-red-600"
        >
          Deletar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
