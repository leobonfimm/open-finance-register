import { z } from 'zod'

import { getPartnerById } from '@/api/get-partner-by-id'
import { Partner } from '@/api/get-partners'
import { updatePartner } from '@/api/update-partner'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
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
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { createPartner } from '@/api/create-partner'
import { toast } from 'sonner'
import { Textarea } from './ui/textarea'

const partnerProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
  repositoryGit: z.string().min(1),
})

type PartnerProfileSchema = z.infer<typeof partnerProfileSchema>

interface PartnerDetailsProps {
  id?: number
}

export function PartnerDetails({ id }: PartnerDetailsProps) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [profileDetails, setProfileDetails] = useState<Partner>({} as Partner)

  const partnerIdUrl = z.coerce
    .number()
    .parse(searchParams.get('partnerId') ?? '0')

  const partnerIdParam = z.coerce.number().parse(id ?? '0')

  const { register, handleSubmit } = useForm<PartnerProfileSchema>({
    resolver: zodResolver(partnerProfileSchema),
    values: {
      name: profileDetails.name,
      description: profileDetails.description,
      repositoryGit: profileDetails.repositoryGit,
    },
  })

  useEffect(() => {
    if (!partnerIdParam || partnerIdParam !== partnerIdUrl) return
    ;(async () => {
      const response = await getPartnerById(partnerIdParam)
      setProfileDetails(response)
    })()
  }, [partnerIdParam, partnerIdUrl])

  async function handleUpdatePartner(data: PartnerProfileSchema) {
    try {
      if (!id) {
        await createPartner(data)
      } else {
        const { name, description, repositoryGit } = data
        const partnerToUpdate: Partner = {
          ...profileDetails,
          name,
          description,
          repositoryGit,
        }

        await updatePartner(partnerToUpdate)
      }

      navigate(0)
    } catch (error) {
      toast.error(
        `Ocorreu um error ao ${id ? 'atualizar' : 'criar'} o parceiro.`,
      )
    }
  }

  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>{id ? 'Editar Parceiro' : 'Novo Parceiro'}</DialogTitle>
        {id && (
          <DialogDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando
            terminar.
          </DialogDescription>
        )}
      </DialogHeader>
      <form
        onSubmit={handleSubmit(handleUpdatePartner)}
        className="grid gap-4 py-4"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input id="name" className="col-span-3" {...register('name')} />
        </div>
        <div className="grid grid-cols-4 items-start gap-4">
          <Label htmlFor="description" className="text-right">
            Descrição
          </Label>
          <Textarea
            id="description"
            className="col-span-3 resize-none"
            rows={5}
            {...register('description')}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="repository" className="text-right">
            Repositório
          </Label>
          <Input
            id="repository"
            className="col-span-3"
            {...register('repositoryGit')}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
