import Button from "@/components/Button";
import Card from "@/components/Card";
import ConfigButton from "@/components/ConfigButton";
import ContrastIcon from '@mui/icons-material/Contrast'

const size: string = "medium"

export default function Home() {
    // @ts-ignore
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100 flex-col gap-5">
            <div className="bg-white shadow-lg rounded-lg p-5 flex-wrap gap-2.5 flex justify-center">
                <Button size={`${size}`} color={"primary"}>aa</Button>
                <Button size={`${size}`} color={"secondary"}>aa</Button>
                <Button size={`${size}`} color={"tertiary"}>aa</Button>
                <Button size={`${size}`} color={"outline"}>aa</Button>
                <Button size={`${size}`} color={"none"}>aa</Button>
            </div>
            <Card>
                aa
            </Card>
            <ConfigButton variant={'outline'}><ContrastIcon/></ConfigButton>
        </main>
    );
}