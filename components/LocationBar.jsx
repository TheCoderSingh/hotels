import ReactDatePicker from "react-datepicker";
import Link from "next/link";
import { useState } from "react";
import { Text } from "@chakra-ui/layout";
import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

import "react-datepicker/dist/react-datepicker.css";

const LocationBar = () => {
	const [location, setLocation] = useState("");
	const [numOfAdults, setNumOfAdults] = useState(0);
	const [numOfChildren, setNumOfChildren] = useState(0);
	const [checkInDate, setCheckInDate] = useState(new Date());
	const [checkOutDate, setCheckOutDate] = useState(new Date());

	return (
		<Box
			maxW="1278"
			margin="40px auto 0 auto"
			p="3"
			borderRadius="6"
			textAlign="center"
		>
			<Flex alignItems="center" justifyContent="center">
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
					onChange={(e) => setLocation(e.target.value)}
					value={location}
				/>
				<Text>for</Text>
				<Select
					placeholder="0"
					w="70px"
					ml="2"
					mr="2"
					onChange={(e) => setNumOfAdults(e.target.value)}
					value={numOfAdults}
				>
					<option value="1">1</option>
					<option value="2">2</option>
				</Select>
				<Text>adults and</Text>
				<Select
					placeholder="0"
					w="70px"
					ml="2"
					mr="2"
					onChange={(e) => setNumOfChildren(e.target.value)}
					value={numOfChildren}
				>
					<option value="1">1</option>
					<option value="2">2</option>
				</Select>
				<Text>children from</Text>
				<CalendarIcon mr="2" ml="2" />
				<Box alignItems="center">
					<ReactDatePicker
						minDate={new Date()}
						placeholderText="Check-in Date"
						selected={checkInDate}
						onChange={(date) => setCheckInDate(date)}
					/>
				</Box>
				<Text ml="4">to</Text>
				<CalendarIcon mr="2" ml="4" />
				<Box>
					<ReactDatePicker
						minDate={new Date()}
						placeholderText="Check-out Date"
						selected={checkOutDate}
						onChange={(date) => setCheckOutDate(date)}
					/>
				</Box>
				<Link href="#" ml="3">
					<Box
						bg="gray.200"
						p={3}
						w="80px"
						h="40px"
						borderRadius={6}
						pt={2}
						ml={3}
						cursor="pointer"
					>
						Search
					</Box>
				</Link>
			</Flex>
		</Box>
	);
};

export default LocationBar;
