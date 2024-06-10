import { Company, getCompanies } from '@/api/get-companies'
import { env } from '@/env'
import { Building } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { CompanyDetails } from './company-details'
import { CompanyTableRow } from './company-table-row'
import { Pagination } from './pagination'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Toaster } from './ui/sonner'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'

const PER_PAGE = env.VITE_PAGINATION_PER_PAGE

export function CompanyTable() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [companies, setCompanies] = useState<Company[]>([])
  const [currentPage, setCurrentPage] = useState(() => {
    const pageIndex = z.coerce.number().parse(searchParams.get('page') ?? '1')

    return pageIndex
  })

  useEffect(() => {
    getCompanies().then((response) => setCompanies(response))
  }, [])

  function handlePageChange(page: number) {
    setSearchParams((state) => {
      state.set('page', page.toString())
      return state
    })

    setCurrentPage(page)
  }

  const currentPageCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * PER_PAGE
    return companies.slice(startIndex, startIndex + PER_PAGE)
  }, [currentPage, companies])

  return (
    <>
      <Toaster richColors />
      <div className="p-8 space-y-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="space-x-2">
              <Building className="h-4 w-4 " />
              <span>Nova Empresa</span>
            </Button>
          </DialogTrigger>

          <CompanyDetails />
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Número de Colaboradores</TableHead>
              <TableHead>Ativa?</TableHead>
              <TableHead className="w-[30px]"></TableHead>
              <TableHead className="w-[30px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPageCompanies.length > 0 &&
              currentPageCompanies.map((company) => (
                <CompanyTableRow key={company.id} company={company} />
              ))}
          </TableBody>
        </Table>

        {companies.length > 0 && (
          <Pagination
            onPageChange={handlePageChange}
            pageIndex={currentPage}
            totalCount={companies.length}
            perPage={PER_PAGE}
          />
        )}
      </div>
    </>
  )
}
