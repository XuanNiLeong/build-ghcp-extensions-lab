// Metadata that defines how Copilot should interpret each available function
export const functionMappings = [
  {
    type: 'function',
    title: 'List all items on the shopping list',
    description:
      'The function returns the current shopping list including id, description of the item, quantity required and whether it has been purchased or not.',
    function: {
      name: 'getShoppingList',
      parameters: {
        type: 'object',
        properties: {
          prerequisite: {
            type: 'string'
          }
        }
      }
    }
  },
  {
    type: 'function',
    title: 'Add item to shopping list',
    description: 'This will add {quantity} x {description} to the list.',
    requiresConfirmation: true,
    function: {
      name: 'addShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          description: {
            type: 'string'
          },
          quantity: {
            type: 'number'
          }
        }
      }
    }
  },
  {
    type: 'function',
    title: 'Delete item from shopping list',
    description: 'This item will remove ID {id} from the shopping list.',
    requiresConfirmation: true,
    function: {
      name: 'deleteShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        },
        required: ['id']
      }
    }
  },
  {
    type: 'function',
    title: 'Update item on shopping list',
    description: 'This action will update the item {id} in the shopping list.',
    requiresConfirmation: true,
    function: {
      name: 'updateShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'The id of the item to update.'
          },
          quantity: {
            type: 'number',
            description: 'The new quantity of the item being updated.'
          },
          description: {
            type: 'string',
            description: 'The new description of the item being updated.'
          }
        },
        required: ['id']
      }
    }
  }
]
