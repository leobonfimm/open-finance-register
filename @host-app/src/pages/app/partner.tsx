import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Share2 } from 'lucide-react'

import { PartnerTable } from 'remote-partner/PartnerTable'

export function PartnerPage() {
  const { toast } = useToast()

  async function handleCopyUrlToClipboard() {
    await navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'URL copiada para o clipboard',
    })
  }

  return (
    <div className="relative">
      <>
        <Button
          id="copy-url-button"
          variant="outline"
          className="flex items-center gap-2 ml-auto absolute top-10 right-8"
          onClick={handleCopyUrlToClipboard}
        >
          <Share2 className="w-4 h-4" />
          Compartilhar Listagem
        </Button>
      </>
      <PartnerTable />
    </div>
  )
}
