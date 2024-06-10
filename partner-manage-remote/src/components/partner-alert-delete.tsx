import { deletePartner } from '@/api/delete-partner'
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

interface PartnerAlertDeleteProps {
  id: number
}

export function PartnerAlertDelete({ id }: PartnerAlertDeleteProps) {
  const navigate = useNavigate()

  async function handleDeletePartner() {
    try {
      await deletePartner(id)

      navigate(0)
    } catch (error) {
      toast.error('Ocorreu um error ao tentar delete o parceiro.')
    }
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você tem certeza que deseja deletar esse parceiro?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação não pode ser desfeita. Isso irá excluir permanentemente os
          dados desse parceiro.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDeletePartner}
          className="bg-destructive hover:bg-red-600"
        >
          Deletar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
