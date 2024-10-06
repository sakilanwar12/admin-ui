export const typography=`
import Typography from "@/components/ui/typorgraphy";

const BasicTypo = () => {
    return (
        <div className="flex flex-col gap-6">
            <Typography as="h1">H1 Heading</Typography>
            <Typography as="h2">H2 Heading</Typography>
            <Typography as="h3">H3 Heading</Typography>
            <Typography as="h4">H4 Heading</Typography>
            <Typography as="h5">H5 Heading</Typography>
            <Typography as="h6">H6 Heading</Typography>
            <Typography as="p">Paragraph</Typography>
            <Typography as="span">Span</Typography>
        </div>
    );
};

export default BasicTypo;`