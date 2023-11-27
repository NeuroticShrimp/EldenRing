import { AlertDialog, Flex, Button } from '@radix-ui/themes'

interface AlertProps {
  title: string;
  message: string;
}

function Alert({ title, message, }:AlertProps){

  return(
<AlertDialog.Root>
  <AlertDialog.Content style={{ maxWidth: 450 }}>
    <AlertDialog.Title>{title}</AlertDialog.Title>
    <AlertDialog.Description size="2">
        {message}
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Revoke access
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>)
}

export default Alert;