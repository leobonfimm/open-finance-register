import { Company } from '@/api/get-companies'
import { Check, Pencil, Trash, Users, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CompanyAlertDelete } from './company-alert-delete'
import { CompanyDetails } from './company-details'
import { AlertDialog, AlertDialogTrigger } from './ui/alert-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { TableCell, TableRow } from './ui/table'

interface CompanyTableRowProps {
  company: Company
}

export function CompanyTableRow({ company }: CompanyTableRowProps) {
  const [, setSearchParams] = useSearchParams()
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  useEffect(() => {
    if (!isOpenDetails) return

    setSearchParams((state) => {
      state.delete('companyId')

      return state
    })
  }, [isOpenDetails, setSearchParams])

  function handleOpenDetails(id: string) {
    setSearchParams((state) => {
      state.set('companyId', id)
      return state
    })

    setIsOpenDetails(true)
  }

  return (
    <TableRow>
      <TableCell>{company.companyName}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {company.collaboratorsCount}
        </div>
      </TableCell>
      <TableCell>
        {company.isActive ? (
          <Check className="h-6 w-6 text-green-500" />
        ) : (
          <X className="h-6 w-6 text-destructive" />
        )}
      </TableCell>
      <TableCell>
        <Dialog open={isOpenDetails} onOpenChange={setIsOpenDetails}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              onClick={() => handleOpenDetails(company.id)}
            >
              <Pencil className="h-4 w-4 " />
              <span className="sr-only">Detalhes da Empresa</span>
            </Button>
          </DialogTrigger>

          <CompanyDetails id={company.id} />
        </Dialog>
      </TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="xs">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Deletar Empresa</span>
            </Button>
          </AlertDialogTrigger>

          <CompanyAlertDelete id={company.id} />
        </AlertDialog>
      </TableCell>
    </TableRow>
  )
}
