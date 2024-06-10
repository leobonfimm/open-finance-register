import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/provider/auth-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const signInForm = z.object({
  user: z.string().min(1),
  password: z.string().min(6),
  isRemember: z.boolean().default(false).optional(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, control } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    mode: 'onSubmit',
  })

  function handleSignIn(data: SignInForm) {
    const { user, password, isRemember = false } = data
    signIn(user, password, isRemember)
    navigate('/manage-partner')
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Portal
          </h1>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user">Usuário</Label>
              <Input id="user" type="text" {...register('user')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Controller
              name="isRemember"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="reminder-me"
                    name={name}
                    onCheckedChange={onChange}
                    checked={value}
                  />
                  <Label htmlFor="reminder-me">Lembrar-me</Label>
                </div>
              )}
            />
          </div>

          <Button className="bg-yellow-600 hover:bg-yellow-700" type="submit">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
