import Link from "next/link";

async function getTickets() {
    const res = await fetch("http://localhost:4000/tickets",{
        next: {
            revalidate: 60
        }
    });
    return res.json()
}
const TicketList = async () => {
    const tickets = await getTickets();
    return ( 
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>
                            {ticket.body.slice(0,200)}...
                        </p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {
                tickets.length === 0  && (
                <p>There are no tickets to display</p>
                )
            }
        </>
     );
}
 
export default TicketList;