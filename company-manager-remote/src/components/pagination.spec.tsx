import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    const user = userEvent.setup()
    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(2)
  })

  it('should be able navigate to the previous page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    const user = userEvent.setup()
    await user.click(previousPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(20)
  })

  it('the previous page button should be disabled', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={1}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    expect(previousPageButton).toBeDisabled()
    expect(firstPageButton).toBeDisabled()
  })

  it('the next page button should be disabled', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={20}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    expect(nextPageButton).toBeDisabled()
    expect(lastPageButton).toBeDisabled()
  })
})
