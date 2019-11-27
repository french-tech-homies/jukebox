import { queryField } from 'nexus';
import { Suggestion } from './suggestions.schema';
import { suggestionsRepository } from './suggestions.repository';

export const suggestions = queryField('suggestions', {
  type: Suggestion,
  list: true,
  async resolve() {
    return await suggestionsRepository.find({}) as any;
  },
});


// export const updateTicket = mutationField('updateTicket', {
//   type: Ticket,
//   args: {
//     id: idArg({ required: true }),
//     status: arg({ type: TicketStatusEnum })
//   },
//   async resolve(_root, { id, status }) {
//     const ticket = await ticketsRepository.findOne({ _id: id });
//     if (ticket) {
//       if (status) {
//         // update ticket status
//         const statusObj = await statusRepository.findOne({ label: status });
//         if (!statusObj) {
//           throw new Error(`Unable to find status ${status}`);
//         }
//         ticket.set({ status: statusObj, modifiedAt: Date.now().toString() });
//       }
//       const newTicket = await ticket.save();
//       return toTicketObject(newTicket);
//     } else {
//       throw new Error(`Unable to find ticket of ID ${id}`);
//     }
//   }
// });