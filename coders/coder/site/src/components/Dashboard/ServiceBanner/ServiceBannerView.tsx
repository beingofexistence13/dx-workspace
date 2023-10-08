import { Pill } from "components/Pill/Pill";
import ReactMarkdown from "react-markdown";
import { colors } from "theme/colors";
import { useTheme } from "@mui/system";
import { css } from "@emotion/react";
import { readableForegroundColor } from "utils/colors";

export interface ServiceBannerViewProps {
  message: string;
  backgroundColor: string;
  isPreview: boolean;
}

export const ServiceBannerView: React.FC<ServiceBannerViewProps> = ({
  message,
  backgroundColor,
  isPreview,
}) => {
  const theme = useTheme();
  // We don't want anything funky like an image or a heading in the service
  // banner.
  const markdownElementsAllowed = [
    "text",
    "a",
    "pre",
    "ul",
    "strong",
    "emphasis",
    "italic",
    "link",
    "em",
  ];
  return (
    <div
      css={css`
        padding: ${theme.spacing(1.5)};
        background-color: ${backgroundColor ?? theme.palette.warning.main};
        display: flex;
        align-items: center;

        &.error {
          background-color: ${colors.red[12]};
        }
      `}
    >
      {isPreview && <Pill text="Preview" type="info" lightBorder />}
      <div
        css={css`
          margin-right: auto;
          margin-left: auto;
          font-weight: 400;
          color: ${readableForegroundColor(backgroundColor)};

          & a {
            color: inherit;
          }
        `}
      >
        <ReactMarkdown
          allowedElements={markdownElementsAllowed}
          linkTarget="_blank"
          unwrapDisallowed
        >
          {message}
        </ReactMarkdown>
      </div>
    </div>
  );
};