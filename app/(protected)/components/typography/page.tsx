import Card from "@/components/ui/code-card";
import BasicTypo from "./basic-typo";
import { typography } from "./souce-code";

const Page = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
            <Card title="Colors" code={typography}>
                <BasicTypo />
            </Card>
        </div>
    );
};

export default Page;