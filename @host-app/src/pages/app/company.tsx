import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Share2 } from 'lucide-react'
import { CompanyTable } from 'remote-company/CompanyTable'

export function CompanyPage() {
  const { toast } = useToast()

  async function handleCopyUrlToClipboard() {
    await navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'URL copiada para o clipboard',
    })
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="flex items-center gap-2 ml-auto absolute top-10 right-8"
        onClick={handleCopyUrlToClipboard}
      >
        <Share2 className="w-4 h-4" />
        Compartilhar Listagem
      </Button>
      <CompanyTable />
    </div>
  )
}
