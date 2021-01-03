import Downshift from 'downshift'

import * as UI from './Autocomplete.styled'

function Autocomplete(props: Props) {
  return (
    <Downshift<Item>
      onChange={props.onSelect}
      onInputValueChange={props.onInputValueChange}
      itemToString={props.itemToString}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps
      }) => (
        <UI.Body {...getRootProps()}>
          <UI.Input
            {...getInputProps()}
            isOpen={isOpen}
            placeholder="City name"
          />
          {isOpen && (
            <UI.Items {...getMenuProps()}>
              {props.items.map((item, index) => (
                <UI.Item
                  {...getItemProps({
                    key: `${item.value}${index}`,
                    item,
                    index,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal'
                    }
                  })}
                >
                  {item.text}
                </UI.Item>
              ))}
            </UI.Items>
          )}
        </UI.Body>
      )}
    </Downshift>
  )
}

interface Props {
  items: Item[]
  itemToString(item: Item | null): string
  onInputValueChange(value: string): void
  onSelect(selectedItem: any): void
}

export interface Item {
  value: string
  text: string
}

export default Autocomplete
