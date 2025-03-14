import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

export default function Modal({
	title = "Please confirm your action",
	body = "Are you sure that you are aware of your action?",
	labelConfirm = "Confirm",
	labelCancel = "Cancel",
	onConfirm = () => console.log("Modal Action Confirmed"),
	onCancel = () => console.log("Modal Action Cancel"),
	variant = "filled",
	size = "xs",
	color = "teal",
	children,
}) {
	const openModal = () =>
		modals.openConfirmModal({
			title: title,
			children: <Text size="xs">{body}</Text>,
			labels: { confirm: labelConfirm, cancel: labelCancel },
			onCancel: () => onCancel(),
			onConfirm: () => onConfirm(),
		});
	return (
		<Button variant={variant} size={size} onClick={openModal} color={color}>
			{children}
		</Button>
	);
}
