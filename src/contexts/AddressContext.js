import React, { Component } from "react"

export const AddressContext = React.createContext()

export class AddresProvider extends Component {
    state = {
        selectedEvent: null,
        showEventDetails: false
      };
    
      setSelectedEvent = change => {
        change
          ? this.setState({
              selectedEvent: change
            })
          : this.setState({
              selectedEvent: change,
              showEventDetails: false
            });
      };
}

// export const AddressProvider = props => {
//     const [showEventDetails, setShowEventsDetais] = useState(false)
//     const [selectedEvent, setSelectedEvent] = useState(change)

//     const isEventSelected = change => {
//        change ? setSelectedEvent(change) : 
//     }
   render() {
       return (
        <AddressContext.Provider
        value={{
          isEventSelected,

        }}
        {...this.props}
      /> 
      )
        }
    }

// render props
export const AddressConsumer = AddressContext.Consumer

// // higher order component
// export const withAddress = Component => props => {
//   return (
//     <AddressConsumer>
//       {value => (
//         <Component
//           count={value.count}
//           increment={value.increment}
//           decrement={value.decrement}
//         />
//       )}
//     </AddressConsumer>
//   );
// };
