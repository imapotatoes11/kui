import Button from "@/components/Button";
import Card from "@/components/Card";
import ConfigButton from "@/components/ConfigButton";
import ContrastIcon from '@mui/icons-material/Contrast'

export default function Home() {
    // @ts-ignore
    return (
        <main className="flex items-center justify-center h-screen bg-gray-100 flex-col gap-5">
            <div className="bg-white shadow-lg rounded-lg p-5 flex-wrap gap-2.5 flex justify-center">
                <Button color={"primary"}>aa</Button>
                <Button color={"secondary"}>aa</Button>
                <Button color={"tertiary"}>aa</Button>
                <Button color={"outline"}>aa</Button>
                <Button color={"none"}>aa</Button>
            </div>
            <Card>
                aa
            </Card>
            <ConfigButton variant={'outline'}><ContrastIcon/></ConfigButton>
        </main>
    );
}