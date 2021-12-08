import ReactDatePicker from "react-datepicker";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input, Select } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

import "react-datepicker/dist/react-datepicker.css";

const LocationBar = () => {
	return (
		<Box
			maxW="978"
			margin="40px auto 0 auto"
			bg="#ed5a5a"
			p="3"
			borderRadius="6"
		>
			<Flex alignItems="center" justifyContent="center" color="#fff">
				<Text>Search hotels in</Text>
				<Input
					w="120px"
					p="0"
					ml="2"
					mr="2"
					placeholder="Location"
					borderTop="none"
					borderRight="none"
					borderLeft="none"
					focusBorderColor="none"
					borderRadius="0"
				/>
				<Text>for</Text>
				<Select placeholder="0" w="70px" ml="2" mr="2">
					<option value="1">1</option>
					<option value="2">2</option>
				</Select>
				<Text>adults and</Text>
				<Select placeholder="0" w="70px" ml="2" mr="2">
					<option value="1">1</option>
					<option value="2">2</option>
				</Select>
				<Text>children.</Text>
			</Flex>
			<Flex alignItems="center" justifyContent="center" mt="3">
				<CalendarIcon mr="2" color="#fff" />
				<Box alignItems="center">
					<ReactDatePicker
						minDate={new Date()}
						placeholderText="Check-in Date"
					/>
				</Box>
				<CalendarIcon mr="2" color="#fff" />
				<Box>
					<ReactDatePicker
						minDate={new Date()}
						placeholderText="Check-out Date"
					/>
				</Box>
			</Flex>
		</Box>
	);
};

export default LocationBar;
