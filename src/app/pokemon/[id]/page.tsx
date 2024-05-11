import Card from "app/components/card";

interface IProps { params: { id: string }, searchParams: {} }
export default function Page(props: IProps) {
    const id = props.params.id;
    return (
        <Card id={id} />
    )
}
