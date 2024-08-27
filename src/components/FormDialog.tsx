import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface FormDialogProps {
  title: string
  description: string
  children: React.ReactNode
  trigger: React.ReactNode
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onSubmit: () => void
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void
}

const FormDialog: React.FC<FormDialogProps> = ({
  title,
  description,
  children,
  trigger,
  isOpen,
  onOpenChange,
  onSubmit,
  onBlur,
  onFocus,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className='sm:max-w-[425px]'
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>{children}</div>
        <DialogFooter>
          <Button type='submit' onClick={onSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FormDialog
