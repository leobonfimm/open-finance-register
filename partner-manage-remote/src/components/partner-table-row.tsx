import { Partner } from '@/api/get-partners'
import { AlertDialog, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { Pencil, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PartnerAlertDelete } from './partner-alert-delete'
import { PartnerDetails } from './partner-details'
import { Button } from './ui/button'
import { TableCell, TableRow } from './ui/table'

interface PartnerTableRowProps {
  partner: Partner
}

export function PartnerTableRow({ partner }: PartnerTableRowProps) {
  const [, setSearchParams] = useSearchParams()
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  useEffect(() => {
    if (isOpenDetails) return

    setSearchParams((state) => {
      state.delete('partnerId')

      return state
    })
  }, [isOpenDetails, setSearchParams])

  function handleOpenDetails(id: number) {
    setSearchParams((state) => {
      state.set('partnerId', id.toString())

      return state
    })

    setIsOpenDetails(true)
  }

  return (
    <TableRow key={partner.id}>
      <TableCell>{partner.name}</TableCell>
      <TableCell>{partner.description}</TableCell>
      <TableCell>{partner.repositoryGit}</TableCell>
      <TableCell>
        <Dialog open={isOpenDetails} onOpenChange={setIsOpenDetails}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              onClick={() => handleOpenDetails(partner.id)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Detalhes do parceiro</span>
            </Button>
          </DialogTrigger>

          <PartnerDetails id={partner.id} />
        </Dialog>
      </TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="xs">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Deletar parceiro</span>
            </Button>
          </AlertDialogTrigger>

          <PartnerAlertDelete id={partner.id} />
        </AlertDialog>
      </TableCell>
    </TableRow>
  )
}
