import { z } from 'zod'

import { createCompany } from '@/api/create-company'
import { Company } from '@/api/get-companies'
import { getCompanyById } from '@/api/get-company-by-id'
import { updateCompany } from '@/api/update-company'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Switch } from './ui/switch'

const companyProfileSchema = z.object({
  companyName: z.string().min(1),
  collaboratorsCount: z.number().min(1),
  isActive: z.boolean().default(false),
})

type CompanyProfileSchema = z.infer<typeof companyProfileSchema>

interface CompanyDetailsProps {
  id?: string
}

export function CompanyDetails({ id }: CompanyDetailsProps) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [companyDetails, setCompanyDetails] = useState<Company>({} as Company)

  const companyIdUrl = searchParams.get('companyId') ?? ''

  const { register, control, handleSubmit } = useForm<CompanyProfileSchema>({
    resolver: zodResolver(companyProfileSchema),
    values: {
      companyName: companyDetails.companyName,
      collaboratorsCount: companyDetails.collaboratorsCount,
      isActive: companyDetails.isActive,
    },
  })

  useEffect(() => {
    if (!id || id !== companyIdUrl) return
    ;(async () => {
      const response = await getCompanyById(id)
      setCompanyDetails(response)
    })()
  }, [id, companyIdUrl])

  async function handleUpdateCompany(data: CompanyProfileSchema) {
    try {
      if (!id) {
        await createCompany(data)
      } else {
        const { companyName, collaboratorsCount, isActive } = data
        const companyToUpdate: Company = {
          ...companyDetails,
          companyName,
          collaboratorsCount,
          isActive,
        }

        await updateCompany(companyToUpdate)
      }

      navigate(0)
    } catch (error) {
      toast.error(
        `Ocorreu um error ao ${id ? 'atualizar' : 'criar'} a empresa.`,
      )
    }
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{id ? 'Editar Empresa' : 'Nova Empresa'}</DialogTitle>
        {id && (
          <DialogDescription>
            Faça alterações da empresa aqui. Clique em salvar quando terminar.
          </DialogDescription>
        )}
      </DialogHeader>
      <form
        onSubmit={handleSubmit(handleUpdateCompany)}
        className="grid gap-4 py-4"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="col-span-2">
            Nome
          </Label>
          <Input
            id="name"
            className="col-span-2"
            {...register('companyName')}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="collaboratorsCount" className="col-span-2">
            Número de colaboradores
          </Label>
          <Input
            id="collaboratorsCount"
            className="col-span-2"
            {...register('collaboratorsCount', { valueAsNumber: true })}
          />
        </div>

        <Controller
          name="isActive"
          control={control}
          render={({ field: { onChange, value, name } }) => (
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="isActive" className="col-span-2">
                Ativa?
              </Label>
              <Switch
                name={name}
                checked={value}
                onCheckedChange={onChange}
                id="isActive"
                className="col-span-2"
              />
            </div>
          )}
        />
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
