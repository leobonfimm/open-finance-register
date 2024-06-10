import { Partner, getPartner } from '@/api/get-partners'
import { env } from '@/env'
import { UserPlus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { Pagination } from './pagination'
import { PartnerDetails } from './partner-details'
import { PartnerTableRow } from './partner-table-row'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Toaster } from './ui/sonner'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'

const PER_PAGE = env.VITE_PAGINATION_PER_PAGE

export function PartnerTable() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [partners, setPartners] = useState<Partner[]>([])
  const [currentPage, setCurrentPage] = useState(() => {
    const pageIndex = z.coerce.number().parse(searchParams.get('page') ?? '1')

    return pageIndex
  })

  useEffect(() => {
    getPartner().then((response) => setPartners(response))
  }, [])

  function handlePageChange(page: number) {
    setSearchParams((state) => {
      state.set('page', page.toString())
      return state
    })

    setCurrentPage(page)
  }

  const currentPagePartners = useMemo(() => {
    const startIndex = (currentPage - 1) * PER_PAGE
    return partners.slice(startIndex, startIndex + PER_PAGE)
  }, [currentPage, partners])

  return (
    <>
      <Toaster richColors />
      <div className="p-8 space-y-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="space-x-2">
              <UserPlus className="h-4 w-4 " />
              <span>Novo Parceiro</span>
            </Button>
          </DialogTrigger>

          <PartnerDetails />
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Nome</TableHead>
              <TableHead className="w-[1000px]">Descrição</TableHead>
              <TableHead className="w-[64px]">Repositório</TableHead>
              <TableHead className="w-[10px]"></TableHead>
              <TableHead className="w-[10px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPagePartners.length > 0 &&
              currentPagePartners.map((partner) => (
                <PartnerTableRow key={partner.id} partner={partner} />
              ))}
          </TableBody>
        </Table>

        {partners.length > 0 && (
          <Pagination
            onPageChange={handlePageChange}
            pageIndex={currentPage}
            totalCount={partners.length}
            perPage={PER_PAGE}
          />
        )}
      </div>
    </>
  )
}
