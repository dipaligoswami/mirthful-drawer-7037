import { Box, Center, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Boxes from '../Components/Boxes'
import Carousel from '../Components/Carousel'
import GridBoxes from '../Components/GridBoxes'
import ReCar from '../Components/ReCar'

const Home = () => {
    const boxes = [1,2,3,4,5,6]
    const secCar = ['secCar',1,2]
    const thCar = ['thCar',1,2]
    const frCar = ['frCar',1,2,3,4,5]
    const banks = ['bankOff',2,3,4]
    const mPop = ['mostPop',2,3,4]
    const tOff = ['topOff',2,3,4]
    const daStp = ['daStap',2,3,4,5,6]
    const snk = ['snack',2,3,4]
    const cln = ['clean',2,3,4]
    const hk = ['hnk',2,3,4,5,6]
    const bStr = ['bStr',2,3,4,5,6]
  return (
    <>
        <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
            <Carousel/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Flex justifyContent='space-between'>
                {boxes.map((item) => (
                    <Box>
                        <Center>
                            <Image src={`/boxes/${item}.webp`} width='90%' cursor={'pointer'}/>
                        </Center>
                    </Box>
                ))}
            </Flex>
        </Box>
        <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
            <ReCar arr={secCar}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={banks} title={"Bank Offers"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={mPop} title={"Most Popular"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={tOff} title={"Top Offers"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <GridBoxes title={"Fruits and Vegetables"} fname={'gridBox'}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={daStp} title={"Your Daily Staples"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <GridBoxes title={"Bevrages"} fname={'bev'}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={snk} title={"Snacks Store"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={cln} title={"Cleaning & Household"}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <GridBoxes title={"Beauty and Hygiene"} fname={'beauty'}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={hk} title={"Home and Kitchen"}/>
        </Box>
        <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
            <ReCar arr={thCar}/>
        </Box>
        <Box width='72%' margin='35px auto'>
            <Boxes arr={bStr} title={"Brand Store"}/>
        </Box>
        <Box width='72%' margin='auto'>
            <Flex padding='15px'>
                <Text fontSize='24px' fontWeight='900'>
                    Featured Recipes
                </Text>
            </Flex>
        </Box>
        <Box width='72%' margin='auto' borderRadius='30px' boxShadow='lg'>
            <ReCar arr={frCar}/>
        </Box>
        <Box width='72%' margin='30px auto' border='1px solid black'>
            {/* <Box padding='0 15%'> */}
                <Container fontSize='14px' maxW='container.md'>
                bigbasket – online grocery store <br/>
                Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options.
                <br/>
                We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.

                Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
                Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
                BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
                Read more..
                <br/>
                <br/>
                India’s biggest Online Supermarket
                bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 5% of the bill value if the delivery is delayed (however, due to the pandemic caused by Covid-19 our delivery might get delayed. Delivery Guarantee will not be applicable). For all your order values above Rs. 1200, we provide free delivery. A wide range of imported and gourmet products are available through our express delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund.
                <br/>
                Best quality products for our quality-conscious customers.
                <br/>
                bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more.

                We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only ensures the best prices and freshest products for our customers but also helps the farmers get better prices. With more than 80 Organic Fruits and Vegetables and a wide range of organic staples, bigbasket has the largest range in the organic products category.
                <br/>
                When it comes to payment, we have made it easy for our customers can pay through multiple payment channels like Credit and Debit cards, Internet Banking, e-wallets and Sodexo passes or simply pay Cash on Delivery (COD).The convenience of shopping for home and daily needs, while not compromising on quality, has made bigbasket.com the online supermarket of choice for thousands of happy customers across India.
                </Container>
            {/* </Box> */}
        </Box>
    </>
  )
}

export default Home