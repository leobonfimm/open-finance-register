import { Checkbox } from '@/components/ui/checkbox'

export function About() {
  return (
    <div className="min-w-full min-h-full flex-1 bg-zinc-800 p-8 text-white">
      <h1 className="text-3xl">Open Finance Register</h1>
      <p className="mt-4">
        Projeto de gerenciamento de parceiros e empresas externas utilizando
        React + Vite + Typescript em uma arquitetura de micro frontend.
      </p>

      <h2 className="text-2xl mt-4">Etapas</h2>

      <h4 className="text-xl my-2">Configurações iniciais</h4>
      <div className="pl-4">
        <ul>
          <li className="space-x-2">
            <Checkbox checked id="step-1" className="border-white" />
            <label htmlFor="step-1">
              Configuração do Vite junto com o pacote{' '}
              <a
                className="text-blue-500"
                href="https://github.com/originjs/vite-plugin-federation"
              >
                Federation
              </a>
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-2" className="border-white" />
            <label htmlFor="step-2">
              Configuração dos temas, estilizações e componentes usando{' '}
              <a
                className="text-blue-500"
                href="https://tailwindcss.com/docs/installation"
              >
                Tailwind CSS
              </a>{' '}
              e{' '}
              <a
                className="text-blue-500"
                href="https://tailwindcss.com/docs/installation"
              >
                shadcn/ui
              </a>
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-3" className="border-white" />
            <label htmlFor="step-3">
              Estrutura de rotas da aplicação usando
              <a
                href="https://reactrouter.com/en/main"
                className="text-blue-500"
              >
                {' '}
                react-router-dom
              </a>
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-4" className="border-white" />
            <label id="step-4">Desenvolvimento dos layouts padrão</label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-5" className="border-white" />
            <label id="step-5">Páginas do Host</label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-6" className="border-white" />
            <label id="step-6">Componentes do MFE de Parceiros</label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-7" className="border-white" />
            <label id="step-7">Componentes do MFE de Empresas</label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-8" className="border-white" />
            <label id="step-8">
              Configurações do ambiente de testes unitários
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-9" className="border-white" />
            <label id="step-9">Criação dos testes unitários</label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-10" className="border-white" />
            <label id="step-10">
              Configuração do ambiente para teste{' '}
              <code className="text-yellow-500">e2e</code>
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-11" className="border-white" />
            <label id="step-11">
              Crianção dos testes <code className="text-yellow-500">e2e</code>
            </label>
          </li>
          <li className="space-x-2">
            <Checkbox checked id="step-12" className="border-white" />
            <label id="step-12">Colocar o projeto em containers</label>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl mt-4">Executando o Projeto</h2>
      <h4 className="text-xl my-2">Docker(Recomendado)</h4>
      <ul className="list-disc pl-8">
        <li>
          <label htmlFor="step-docker-setup-1">
            O{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              docker
            </code>{' '}
            e{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              docker compose
            </code>{' '}
            precisam estar instalados na máquinas:{' '}
            <a href="https://www.docker.com/%5D" className="text-blue-500">
              Docker
            </a>
          </label>
        </li>
        <li>
          <label htmlFor="step-docker-setup-2">
            Crie um arquivo{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              .env.local
            </code>{' '}
            para cada projeto{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              @host-app
            </code>
            ,{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              partner-manage-remote
            </code>{' '}
            e{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              company-manage-remote
            </code>{' '}
            então copie as as variáveis que estão no{' '}
            <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
              .env.example
            </code>
          </label>

          <ol className="list-disc pl-4">
            <li>
              No{' '}
              <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
                @host-app
              </code>{' '}
              a variável{' '}
              <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
                VITE_PASSWORD_SECRET_KEY
              </code>{' '}
              é uma chave para criptografar a senha, então fica a seu critério
              qual chave usar.
            </li>
          </ol>
        </li>
        <li>
          Na raiz do projeto onde tem o arquivo{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            docker-compose.yml
          </code>
          , basta rodar o seguinte comando{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            docker compose -up --build
          </code>
        </li>
      </ul>

      <h4 className="text-xl my-2">Rodando Localmente</h4>
      <ul className="list-disc pl-8">
        <li>
          Crie um arquivo{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            .env.local
          </code>{' '}
          para cada projeto{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            @host-app
          </code>
          ,{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            partner-manage-remote
          </code>{' '}
          e{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            company-manage-remote
          </code>{' '}
          então copie as as variáveis que estão no{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            .env.example
          </code>
          <ol className="list-disc pl-4">
            <li>
              No{' '}
              <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
                @host-app
              </code>{' '}
              a variável{' '}
              <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
                VITE_PASSWORD_SECRET_KEY
              </code>{' '}
              é uma chave para criptografar a senha, então fica a seu critério
              qual chave usar.
            </li>
          </ol>
        </li>
        <li>
          Entrar em cada pasta{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            @host-app
          </code>
          ,{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            partner-manage-remote
          </code>{' '}
          e{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            company-manage-remote
          </code>{' '}
          e rodar{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm i
          </code>
          (Eu estou usando{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm
          </code>
          , mas qualquer gerenciador de pacotes funciona)
        </li>
        <li>
          Entrar na pasta do projeto{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            partner-manage-remote
          </code>{' '}
          e rodar{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm build
          </code>{' '}
          e depois{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm preview
          </code>
        </li>
        <li>
          Entrar na pasta do projeto{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            company-manage-remote
          </code>{' '}
          e rodar{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm build
          </code>{' '}
          e depois{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm preview
          </code>
        </li>
        <li>
          Entrar na pasta do projeto{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            @host-app
          </code>{' '}
          e rodar{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm build
          </code>{' '}
          e depois{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm preview
          </code>{' '}
          ou simplesmente{' '}
          <code className="text-yellow-500 bg-zinc-700 p-[2px] rounded-md">
            pnpm dev
          </code>
        </li>
      </ul>
    </div>
  )
}
