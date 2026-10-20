// Source: https://wordmastery.org/thai/?utm_source=chatgpt.com#nouns-heading
const thaiVocabulary = {
	verbs: [
		{
			word: 'เป็น',
			translation: 'to be',
			pronunciation: 'PEN',
			example: 'เขาเป็นหมอใจดี. (He is a kind doctor.)',
			synonym: ['คือ (to be)'],
			antonym: [],
		},
		{
			word: 'มี',
			translation: 'to have',
			pronunciation: 'MEE',
			example: 'ฉันมีเงินสดติดตัวนิดหน่อย. (I have a little cash with me.)',
			synonym: [],
			antonym: ['ไม่มี (to not have)'],
		},
		{
			word: 'ถือ',
			translation: 'to hold',
			pronunciation: 'TEU',
			example: 'เขาถือร่มในวันที่ฝนตก. (He holds an umbrella on a rainy day.)',
			synonym: ['จับ (to grab)'],
			antonym: ['ปล่อย (to release)'],
		},
		{
			word: 'ทำ',
			translation: 'to do',
			pronunciation: 'THAM',
			example: 'แม่ทำอาหารเย็นในครัว. (Mom makes dinner in the kitchen.)',
			synonym: ['สร้าง (to build)'],
			antonym: [],
		},
		{
			word: 'ทำลาย',
			translation: 'to destroy',
			pronunciation: 'tham-LAAI',
			example:
				'พายุทำลายบ้านเรือนริมทะเล. (The storm destroyed houses by the sea.)',
			synonym: ['พัง (to break)'],
			antonym: ['สร้าง (to build)'],
		},
		{
			word: 'ปกคลุม',
			translation: 'to cover',
			pronunciation: 'pok-KLOOM',
			example:
				'หมอกหนาปกคลุมยอดเขาตอนเช้า. (Thick fog covers the mountain peak in the morning.)',
			synonym: ['คลุม (to cover)'],
			antonym: ['เปิดเผย (to reveal)'],
		},
		{
			word: 'ดึงดูด',
			translation: 'to attract',
			pronunciation: 'deung-DOOT',
			example:
				'ดอกไม้ส่งกลิ่นดึงดูดผึ้งเข้ามา. (The flower gives off a scent to attract bees.)',
			synonym: ['จูงใจ (to persuade)'],
			antonym: ['ผลักดัน (to push away)'],
		},
		{
			word: 'พักผ่อน',
			translation: 'to rest',
			pronunciation: 'phak-PHON',
			example:
				'พ่อพักผ่อนใต้ต้นไม้ในสวน. (Father rests under the tree in the garden.)',
			synonym: ['นอนหลับ (to sleep)'],
			antonym: ['ทำงานหนัก (to overwork)'],
		},
		{
			word: 'ตอบ',
			translation: 'to answer',
			pronunciation: 'TOP',
			example:
				"นักเรียนตอบคำถามของครูทันที. (The student answered the teacher's question immediately.)",
			synonym: ['ขานรับ (to acknowledge)'],
			antonym: ['ถาม (to ask)'],
		},
		{
			word: 'ต่อสู้',
			translation: 'to fight',
			pronunciation: 'tor-SOO',
			example:
				'ทหารต่อสู้เพื่อปกป้องประชาชน. (Soldiers fight to protect the people.)',
			synonym: ['รบ (to combat)'],
			antonym: ['ยอมแพ้ (to surrender)'],
		},
		{
			word: 'กระโดด',
			translation: 'to jump',
			pronunciation: 'kra-DOT',
			example: 'กบกระโดดลงไปในสระน้ำ. (The frog jumped into the pond.)',
			synonym: ['เผ่น (to leap)'],
			antonym: [],
		},
		{
			word: 'ขยับ',
			translation: 'to move',
			pronunciation: 'kha-YAP',
			example:
				'โปรดขยับเก้าอี้ไปทางซ้าย. (Please move the chair to the left.)',
			synonym: ['เคลื่อนไหว (to move)'],
			antonym: ['หยุดนิ่ง (to stay still)'],
		},
		{
			word: 'ตี',
			translation: 'to hit',
			pronunciation: 'TEE',
			example:
				'เขาใช้ไม้ตีลูกบอลข้ามรั้ว. (He used a bat to hit the ball over the fence.)',
			synonym: ['เคาะ (to strike)'],
			antonym: [],
		},
		{
			word: 'ทำให้เปียก',
			translation: 'to wet',
			pronunciation: 'tham-hai-PEEAK',
			example:
				'น้ำฝนทำให้เปียกเสื้อผ้าหมดเลย. (The rain made all the clothes wet.)',
			synonym: ['ชโลม (to moisten)'],
			antonym: ['ทำให้แห้ง (to dry)'],
		},
		{
			word: 'ร้องไห้',
			translation: 'to cry',
			pronunciation: 'rong-HAI',
			example:
				'เด็กน้อยร้องไห้เพราะหกล้ม. (The little child cried because of a fall.)',
			synonym: ['หลั่งน้ำตา (to weep)'],
			antonym: ['หัวเราะ (to laugh)'],
		},
		{
			word: 'หัวเราะ',
			translation: 'to laugh',
			pronunciation: 'hua-RAO',
			example:
				'ทุกคนหัวเราะกับเรื่องเล่าสนุกๆ. (Everyone laughed at the funny story.)',
			synonym: ['ขำ (to chuckle)'],
			antonym: ['ร้องไห้ (to cry)'],
		},
		{
			word: 'ตะโกน',
			translation: 'to shout',
			pronunciation: 'ta-GON',
			example:
				'เขาตะโกนเรียกเพื่อนข้ามถนน. (He shouted to call his friend across the street.)',
			synonym: ['ส่งเสียงดัง (to yell)'],
			antonym: ['กระซิบ (to whisper)'],
		},
		{
			word: 'ร้องเพลง',
			translation: 'to sing',
			pronunciation: 'rong-PHLENG',
			example:
				'น้องสาวร้องเพลงระหว่างอาบน้ำ. (My little sister sings while taking a bath.)',
			synonym: ['ขับร้อง (to sing formally)'],
			antonym: [],
		},
		{
			word: 'เตือน',
			translation: 'to warn',
			pronunciation: 'TEUAN',
			example:
				'ป้ายเตือนระวังพื้นลื่น. (The sign warns people about the slippery floor.)',
			synonym: ['บอกกล่าว (to notify)'],
			antonym: [],
		},
		{
			word: 'วัด',
			translation: 'to measure',
			pronunciation: 'WAT',
			example:
				'ช่างตัดเสื้อวัดขนาดรอบเอว. (The tailor measures the waist size.)',
			synonym: ['กะเกณฑ์ (to estimate)'],
			antonym: [],
		},
		{
			word: 'ชั่งน้ำหนัก',
			translation: 'to weigh',
			pronunciation: 'chang-nam-NAK',
			example:
				'พยาบาลชั่งน้ำหนักเด็กทารกทุกเดือน. (The nurse weighs the infant every month.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'รัก',
			translation: 'to love',
			pronunciation: 'RAK',
			example:
				'แม่รักลูกสุดหัวใจเสมอ. (A mother loves her child with all her heart.)',
			synonym: ['เอ็นดู (to care for)'],
			antonym: ['เกลียด (to hate)'],
		},
		{
			word: 'เกลียด',
			translation: 'to hate',
			pronunciation: 'GLEEAT',
			example:
				'ฉันเกลียดแมลงสาบที่บินในห้อง. (I hate cockroaches flying in the room.)',
			synonym: ['ชัง (to despise)'],
			antonym: ['รัก (to love)'],
		},
		{
			word: 'ทำร้าย',
			translation: 'to hurt',
			pronunciation: 'tham-RAAI',
			example: 'อย่าทำร้ายสัตว์ตัวเล็กๆ. (Do not hurt little animals.)',
			synonym: ['ประทุษร้าย (to assault)'],
			antonym: ['ปกป้อง (to protect)'],
		},
		{
			word: 'เลือดออก',
			translation: 'to bleed',
			pronunciation: 'leuat-OK',
			example:
				'มีดบาดนิ้วจนเลือดออกไม่หยุด. (The knife cut the finger until it bled without stopping.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'รักษา',
			translation: 'to heal',
			pronunciation: 'rak-SAA',
			example:
				'หมอรักษาบาดแผลสดอย่างระมัดระวัง. (The doctor treats the fresh wound carefully.)',
			synonym: ['เยียวยา (to cure)'],
			antonym: ['ทำร้าย (to harm)'],
		},
		{
			word: 'ทำให้สกปรก',
			translation: 'to dirty',
			pronunciation: 'tham-hai-sok-ga-PROK',
			example:
				'รองเท้าเปื้อนโคลนทำให้สกปรกพื้นบ้าน. (Muddy shoes dirtied the floor of the house.)',
			synonym: ['ทำเลอะ (to stain)'],
			antonym: ['ทำความสะอาด (to clean)'],
		},
		{
			word: 'ทำความสะอาด',
			translation: 'to clean',
			pronunciation: 'tham-khwaam-sa-AAT',
			example:
				'พวกเราทำความสะอาดห้องนั่งเล่นทุกวันเสาร์. (We clean the living room every Saturday.)',
			synonym: ['เก็บกวาด (to tidy up)'],
			antonym: ['ทำให้สกปรก (to dirty)'],
		},
		{
			word: 'จับ',
			translation: 'to grab',
			pronunciation: 'JAP',
			example:
				'เขาจับราวบันไดขณะเดินลง. (He held the handrail while walking down.)',
			synonym: ['กุม (to clasp)'],
			antonym: ['ปล่อย (to release)'],
		},
		{
			word: 'ปล่อย',
			translation: 'to release',
			pronunciation: 'PLOY',
			example:
				'เด็กๆ ปล่อยนกกลับคืนสู่ธรรมชาติ. (The children released the birds back into nature.)',
			synonym: ['ละทิ้ง (to abandon)'],
			antonym: ['จับ (to grab)'],
		},
		{
			word: 'ผลัก',
			translation: 'to push',
			pronunciation: 'PHLAK',
			example:
				'ลูกค้าผลักประตูบานใหญ่เข้าไปในร้าน. (The customer pushed the big door to enter the shop.)',
			synonym: ['ดัน (to shove)'],
			antonym: ['ดึง (to pull)'],
		},
		{
			word: 'โยน',
			translation: 'to throw',
			pronunciation: 'YON',
			example:
				'เขาโยนขวดเปล่าลงในถังขยะ. (He threw the empty bottle into the trash bin.)',
			synonym: ['ขว้าง (to cast)'],
			antonym: ['รับ (to catch)'],
		},
		{
			word: 'ตัด',
			translation: 'to cut',
			pronunciation: 'TAT',
			example:
				'ช่างตัดกิ่งไม้แห้งออกจากต้น. (The gardener cuts dry branches off the tree.)',
			synonym: ['เฉือน (to slice)'],
			antonym: ['ต่อ (to join)'],
		},
		{
			word: 'ผูก',
			translation: 'to tie',
			pronunciation: 'PHOOK',
			example:
				'เด็กชายผูกเชือกรองเท้าด้วยตนเอง. (The boy ties his own shoelaces.)',
			synonym: ['มัด (to bind)'],
			antonym: ['แก้ (to untie)'],
		},
		{
			word: 'แก้',
			translation: 'to untie',
			pronunciation: 'GAE',
			example:
				'เขาพยายามแก้ปมเชือกที่แน่นมาก. (He tried to untie the very tight knot.)',
			synonym: ['คลาย (to loosen)'],
			antonym: ['ผูก (to tie)'],
		},
		{
			word: 'พับ',
			translation: 'to fold',
			pronunciation: 'PHAP',
			example:
				'พี่สาวพับผ้าห่มบนเตียงอย่างเรียบร้อย. (The older sister folded the blanket on the bed neatly.)',
			synonym: ['ทบ (to double over)'],
			antonym: ['กาง (to unfold)'],
		},
		{
			word: 'ผสม',
			translation: 'to mix',
			pronunciation: 'pha-SOM',
			example:
				'เชฟผสมแป้งกับนมสดในชามใหญ่. (The chef mixes flour and fresh milk in a large bowl.)',
			synonym: ['คลุกเคล้า (to blend)'],
			antonym: ['แยก (to separate)'],
		},
		{
			word: 'แบ่ง',
			translation: 'to divide',
			pronunciation: 'BAENG',
			example:
				'แม่แบ่งเค้กให้ลูกทุกคนเท่ากัน. (Mother divided the cake equally for all children.)',
			synonym: ['แจกจ่าย (to distribute)'],
			antonym: ['รวม (to combine)'],
		},
		{
			word: 'บวก',
			translation: 'to add',
			pronunciation: 'BUAK',
			example:
				'ครูสอนให้นักเรียนบวกเลขหลักสิบ. (The teacher teaches the students to add double-digit numbers.)',
			synonym: ['รวม (to sum)'],
			antonym: ['ลบ (to subtract)'],
		},
		{
			word: 'ลบ',
			translation: 'to subtract',
			pronunciation: 'LOP',
			example:
				'เอาห้าลบสองเหลือเท่ากับสาม. (Subtracting two from five leaves three.)',
			synonym: ['หักออก (to deduct)'],
			antonym: ['บวก (to add)'],
		},
		{
			word: 'คูณ',
			translation: 'to multiply',
			pronunciation: 'KHOON',
			example:
				'นักเรียนฝึกท่องสูตรคูณทุกเช้า. (Students practice reciting multiplication tables every morning.)',
			synonym: ['ทวีคูณ (to multiply manifold)'],
			antonym: ['หาร (to divide numbers)'],
		},
		{
			word: 'ปิด',
			translation: 'to turn off',
			pronunciation: 'PIT',
			example:
				'อย่าลืมปิดไฟก่อนออกจากห้อง. (Do not forget to turn off the lights before leaving the room.)',
			synonym: ['ดับ (to extinguish)'],
			antonym: ['เปิด (to turn on)'],
		},
		{
			word: 'เปิด',
			translation: 'to turn on',
			pronunciation: 'POET',
			example:
				'เขาเปิดพัดลมเพื่อคลายร้อน. (He turned on the fan to cool down.)',
			synonym: ['จุด (to ignite)'],
			antonym: ['ปิด (to turn off)'],
		},
		{
			word: 'สร้าง',
			translation: 'to build',
			pronunciation: 'SAANG',
			example:
				'คนงานช่วยกันสร้างสะพานข้ามคลอง. (The workers helped build a bridge over the canal.)',
			synonym: ['ก่อสร้าง (to construct)'],
			antonym: ['ทำลาย (to destroy)'],
		},
		{
			word: 'วาง',
			translation: 'to place',
			pronunciation: 'WAANG',
			example:
				'เขาวางแก้วน้ำไว้บนโต๊ะทำงาน. (He placed the glass of water on the desk.)',
			synonym: ['ตั้ง (to set down)'],
			antonym: ['หยิบ (to pick up)'],
		},
		{
			word: 'หวีผม',
			translation: 'to comb hair',
			pronunciation: 'wee-PHOM',
			example:
				'น้องสาวหวีผมหน้ากระจกทุกเช้า. (Little sister combs her hair in front of the mirror every morning.)',
			synonym: ['สางผม (to detangle hair)'],
			antonym: [],
		},
		{
			word: 'โกนหนวด',
			translation: 'to shave',
			pronunciation: 'gon-NUAT',
			example:
				'พ่อโกนหนวดทุกเช้าก่อนไปทำงาน. (Father shaves his beard every morning before going to work.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อาบน้ำ',
			translation: 'to bathe',
			pronunciation: 'aap-NAM',
			example:
				'ฉันอาบน้ำอุ่นหลังจากกลับมาจากข้างนอก. (I take a warm bath after returning from outside.)',
			synonym: ['ชำระร่างกาย (to cleanse the body)'],
			antonym: [],
		},
		{
			word: 'สงสัย',
			translation: 'to doubt',
			pronunciation: 'song-SAI',
			example:
				'ตำรวจสงสัยพฤติกรรมของชายแปลกหน้า. (The police doubted the behavior of the strange man.)',
			synonym: ['ข้องใจ (to wonder)'],
			antonym: ['มั่นใจ (to be certain)'],
		},
		{
			word: 'ลืม',
			translation: 'to forget',
			pronunciation: 'LEUM',
			example: 'ฉันลืมกุญแจห้องไว้ข้างใน. (I forgot my room keys inside.)',
			synonym: [],
			antonym: ['จำ (to remember)'],
		},
		{
			word: 'จำ',
			translation: 'to remember',
			pronunciation: 'JAM',
			example:
				"เขาจำเบอร์โทรศัพท์ของเพื่อนได้แม่นยำ. (He remembers his friend's phone number accurately.)",
			synonym: ['รำลึก (to recall)'],
			antonym: ['ลืม (to forget)'],
		},
		{
			word: 'รวบรวม',
			translation: 'to gather',
			pronunciation: 'ruap-RUAM',
			example:
				'อาจารย์รวบรวมรายงานจากนักเรียนทุกคน. (The teacher gathers reports from all students.)',
			synonym: ['สะสม (to collect)'],
			antonym: ['กระจัดกระจาย (to scatter)'],
		},
		{
			word: 'แยก',
			translation: 'to separate',
			pronunciation: 'YAEK',
			example:
				'เราควรแยกขยะรีไซเคิลก่อนทิ้ง. (We should separate recyclable waste before throwing it away.)',
			synonym: ['จำแนก (to categorize)'],
			antonym: ['รวม (to join)'],
		},
		{
			word: 'ส่ง',
			translation: 'to send',
			pronunciation: 'SONG',
			example:
				'เขาไปที่ทำการไปรษณีย์เพื่อส่งจดหมาย. (He went to the post office to send a letter.)',
			synonym: ['มอบ (to hand over)'],
			antonym: ['รับ (to receive)'],
		},
		{
			word: 'เก็บ',
			translation: 'to pick up',
			pronunciation: 'GEP',
			example:
				'เด็กๆ ช่วยกันเก็บของเล่นเข้ากล่อง. (The children helped collect the toys into the box.)',
			synonym: ['รวบรวม (to gather)'],
			antonym: ['ทิ้ง (to discard)'],
		},
		{
			word: 'รอ',
			translation: 'to wait',
			pronunciation: 'ROR',
			example:
				'พวกเรายืนรอรถประจำทางที่ป้าย. (We stand waiting for the bus at the bus stop.)',
			synonym: ['คอย (to await)'],
			antonym: [],
		},
		{
			word: 'เดินทาง',
			translation: 'to travel',
			pronunciation: 'doen-THAANG',
			example:
				'ครอบครัวเราเดินทางไปเที่ยวภูเขาช่วงวันหยุด. (Our family travels to visit the mountains over the holidays.)',
			synonym: ['ท่องเที่ยว (to journey)'],
			antonym: ['หยุดพัก (to stay still)'],
		},
		{
			word: 'อดทน',
			translation: 'to endure',
			pronunciation: 'ot-THON',
			example:
				'เขาอดทนต่อความยากลำบากเพื่ออนาคต. (He endures hardships for the sake of the future.)',
			synonym: ['ทนทาน (to bear)'],
			antonym: ['ยอมแพ้ (to give up)'],
		},
		{
			word: 'คำนวณ',
			translation: 'to calculate',
			pronunciation: 'kham-NUAN',
			example:
				'วิศวกรคำนวณค่าใช้จ่ายในการก่อสร้าง. (The engineer calculates the expenses for construction.)',
			synonym: ['คิดเลข (to compute)'],
			antonym: [],
		},
		{
			word: 'ออมเงิน',
			translation: 'to save money',
			pronunciation: 'aawm-NGOEN',
			example:
				'เด็กดีหยอดกระปุกเพื่อออมเงินทุกวัน. (The good child drops coins in the piggy bank to save money every day.)',
			synonym: ['เก็บเงิน (to keep money)'],
			antonym: ['ใช้จ่าย (to spend)'],
		},
		{
			word: 'ใช้จ่าย',
			translation: 'to spend',
			pronunciation: 'chai-JAAI',
			example:
				'อย่าใช้จ่ายเงินเกินตัวจนเป็นหนี้. (Do not spend beyond your means and fall into debt.)',
			synonym: ['จับจ่าย (to disburse)'],
			antonym: ['ออมเงิน (to save money)'],
		},
		{
			word: 'ชาร์จ',
			translation: 'to charge',
			pronunciation: 'CHAAT',
			example:
				'ฉันเสียบสายชาร์จแบตเตอรี่โทรศัพท์มือถือ. (I plugged in the cable to charge the mobile phone battery.)',
			synonym: ['ประจุไฟ (to charge electricity)'],
			antonym: [],
		},
		{
			word: 'ดาวน์โหลด',
			translation: 'to download',
			pronunciation: 'daao-LOHT',
			example:
				'นักเรียนดาวน์โหลดเอกสารประกอบการเรียนจากระบบ. (Students download study materials from the system.)',
			synonym: ['โหลด (to download informally)'],
			antonym: ['อัปโหลด (to upload)'],
		},
		{
			word: 'นำเสนอ',
			translation: 'to present',
			pronunciation: 'nam-sa-NOE',
			example:
				'ทีมงานนำเสนอแผนงานใหม่ต่อผู้จัดการ. (The team presents the new plan to the manager.)',
			synonym: ['เสนอ (to propose)'],
			antonym: [],
		},
		{
			word: 'ยอมรับ',
			translation: 'to accept',
			pronunciation: 'yawm-RAP',
			example:
				'เขาพร้อมยอมรับความผิดพลาดของตัวเอง. (He is ready to accept his own mistakes.)',
			synonym: ['เห็นพ้อง (to concur)'],
			antonym: ['ปฏิเสธ (to reject)'],
		},
		{
			word: 'ประสบความสำเร็จ',
			translation: 'to achieve',
			pronunciation: 'pra-sop-khwaam-sam-RET',
			example:
				'เธอพยายามอย่างหนักจนประสบความสำเร็จในการเรียน. (She worked hard until she succeeded in her studies.)',
			synonym: ['บรรลุผล (to reach fruition)'],
			antonym: ['ล้มเหลว (to fail)'],
		},
		{
			word: 'อธิบาย',
			translation: 'to explain',
			pronunciation: 'a-thi-BAAI',
			example:
				'ครูอธิบายบทเรียนอย่างละเอียดให้นักเรียนฟัง. (The teacher explains the lesson thoroughly to the students.)',
			synonym: ['ชี้แจง (to clarify)'],
			antonym: [],
		},
		{
			word: 'ถาม',
			translation: 'to ask',
			pronunciation: 'THAAM',
			example:
				'นักท่องเที่ยวถามทางไปสถานีรถไฟ. (The tourist asks for directions to the train station.)',
			synonym: ['ไต่ถาม (to inquire)'],
			antonym: ['ตอบ (to answer)'],
		},
		{
			word: 'สัมผัส',
			translation: 'to touch',
			pronunciation: 'sam-PHAT',
			example:
				'มือของเขาเริ่มสัมผัสผิวน้ำอันเย็นเฉียบ. (His hand began to touch the icy water surface.)',
			synonym: ['แตะต้อง (to contact)'],
			antonym: [],
		},
		{
			word: 'จำได้',
			translation: 'to recognize',
			pronunciation: 'jam-DAAI',
			example:
				'ฉันจำได้ว่าเคยพบเขาที่ห้องสมุดเมื่อปีก่อน. (I recognize having met him at the library last year.)',
			synonym: ['นึกออก (to recall)'],
			antonym: ['ลืม (to forget)'],
		},
		{
			word: 'ศึกษา',
			translation: 'to study',
			pronunciation: 'seuk-SAA',
			example:
				'นักศึกษาตั้งใจศึกษาค้นคว้าข้อมูลในหอสมุด. (The university students intend to study and research information in the library.)',
			synonym: ['เล่าเรียน (to learn)'],
			antonym: [],
		},
		{
			word: 'ไปถึง',
			translation: 'to reach',
			pronunciation: 'pai-THEUNG',
			example:
				'รถไฟไปถึงสถานีปลายทางตรงเวลาพอดี. (The train reached the terminal station right on time.)',
			synonym: ['บรรลุถึง (to arrive at)'],
			antonym: [],
		},
		{
			word: 'เกิด',
			translation: 'to be born',
			pronunciation: 'GOET',
			example:
				'ลูกสุนัขเพิ่งเกิดมาได้เพียงสามสัปดาห์. (The puppy was born just three weeks ago.)',
			synonym: ['กำเนิด (to originate)'],
			antonym: ['ตาย (to die)'],
		},
		{
			word: 'กำกับ',
			translation: 'to direct',
			pronunciation: 'gam-GAP',
			example:
				'เขาทำหน้าที่กำกับภาพยนตร์เรื่องใหม่นี้. (He acts to direct this new movie.)',
			synonym: ['ควบคุม (to oversee)'],
			antonym: [],
		},
		{
			word: 'วิ่ง',
			translation: 'to run',
			pronunciation: 'WING',
			example:
				'พวกเราออกไปวิ่งออกกำลังกายที่สวนสาธารณะ. (We went out to run for exercise at the public park.)',
			synonym: ['แล่น (to dash)'],
			antonym: ['เดิน (to walk)'],
		},
		{
			word: 'ใช้',
			translation: 'to use',
			pronunciation: 'CHAI',
			example:
				'คนทำงานใช้คอมพิวเตอร์พิมพ์รายงานประจำวัน. (Workers use computers to type daily reports.)',
			synonym: ['นำมาใช้ (to utilize)'],
			antonym: [],
		},
		{
			word: 'จ่าย',
			translation: 'to pay',
			pronunciation: 'JAAI',
			example:
				'เขาจ่ายเงินค่าอาหารด้วยบัตรเครดิต. (He paid for the food bill using a credit card.)',
			synonym: ['ชำระ (to settle a bill)'],
			antonym: ['รับ (to receive)'],
		},
		{
			word: 'ช่วย',
			translation: 'to help',
			pronunciation: 'CHUAI',
			example:
				'โปรดช่วยเปิดหน้าต่างบานนั้นให้หน่อย. (Please help open that window for a moment.)',
			synonym: ['สงเคราะห์ (to aid)'],
			antonym: ['ขัดขวาง (to hinder)'],
		},
		{
			word: 'ชอบ',
			translation: 'to like',
			pronunciation: 'CHAWP',
			example:
				'เด็กๆ ชอบกินไอศกรีมรสช็อกโกแลตมาก. (Children like eating chocolate ice cream very much.)',
			synonym: ['พึงใจ (to be pleased with)'],
			antonym: ['เกลียด (to hate)'],
		},
		{
			word: 'เล่น',
			translation: 'to play',
			pronunciation: 'LEN',
			example:
				'เด็กๆ วิ่งเล่นฟุตบอลในสนามหญ้า. (The children run around playing football on the grass pitch.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฟัง',
			translation: 'to listen',
			pronunciation: 'FANG',
			example:
				'เขาชอบนั่งฟังเพลงเบาๆ ก่อนนอน. (He likes sitting and listening to soft music before bed.)',
			synonym: ['สดับ (to heed)'],
			antonym: [],
		},
		{
			word: 'พยายาม',
			translation: 'to try',
			pronunciation: 'pha-yaa-YAAM',
			example:
				'นักกีฬาพยายามฝึกซ้อมทุกวันเพื่อคว้าเหรียญทอง. (The athlete tries to practice every day to win the gold medal.)',
			synonym: ['มุ่งมั่น (to strive)'],
			antonym: ['ท้อถอย (to give up)'],
		},
		{
			word: 'พัฒนา',
			translation: 'to develop',
			pronunciation: 'phat-tha-NAA',
			example:
				'วิศวกรพัฒนาซอฟต์แวร์ให้ทำงานเร็วขึ้นกว่าเดิม. (Engineers develop software to work faster than before.)',
			synonym: ['ปรับปรุง (to improve)'],
			antonym: ['ถดถอย (to regress)'],
		},
		{
			word: 'ชี้',
			translation: 'to point out',
			pronunciation: 'CHEE',
			example:
				'ไกด์ชี้มือไปที่ยอดปราสาทบนเนินเขา. (The guide points to the top of the castle on the hill.)',
			synonym: ['ระบุ (to indicate)'],
			antonym: [],
		},
		{
			word: 'เตรียม',
			translation: 'to prepare',
			pronunciation: 'TREEAM',
			example:
				'แม่เตรียมวัตถุดิบทำกับข้าวสำหรับมื้อเย็น. (Mom prepares cooking ingredients for dinner.)',
			synonym: ['จัดเตรียม (to arrange)'],
			antonym: [],
		},
		{
			word: 'เสนอ',
			translation: 'to offer',
			pronunciation: 'sa-NOE',
			example:
				'บริษัทเสนอเงินเดือนสูงเพื่อดึงดูดผู้สมัครฝีมือดี. (The company offers a high salary to attract skilled applicants.)',
			synonym: ['ยื่น (to tender)'],
			antonym: [],
		},
		{
			word: 'ค้นพบ',
			translation: 'to discover',
			pronunciation: 'khon-PHOP',
			example:
				'นักวิทยาศาสตร์ค้นพบวิธีรักษาโรคแบบใหม่. (Scientists discovered a new way to treat the disease.)',
			synonym: ['พานพบ (to encounter)'],
			antonym: [],
		},
		{
			word: 'เข้าใจ',
			translation: 'to understand',
			pronunciation: 'khao-JAI',
			example:
				'นักเรียนทุกคนเข้าใจเนื้อหาบทเรียนของวันนี้. (All students understand the lesson content today.)',
			synonym: ['รับรู้ (to comprehend)'],
			antonym: ['สับสน (to be confused)'],
		},
		{
			word: 'ทำตาม',
			translation: 'to fulfill',
			pronunciation: 'tham-TAAM',
			example:
				"พนักงานทำตามคำแนะนำของผู้จัดการอย่างเคร่งครัด. (Employees follow the manager's instructions strictly.)",
			synonym: ['ปฏิบัติตาม (to comply)'],
			antonym: ['ฝ่าฝืน (to violate)'],
		},
		{
			word: 'ยก',
			translation: 'to lift',
			pronunciation: 'YOK',
			example:
				'คนงานยกกล่องสินค้าหนักขึ้นบนท้ายรถบรรทุก. (The worker lifts heavy product boxes onto the back of the truck.)',
			synonym: ['แบก (to carry)'],
			antonym: ['วางลง (to put down)'],
		},
		{
			word: 'ก่อตั้ง',
			translation: 'to establish',
			pronunciation: 'gor-TANG',
			example:
				'กลุ่มอาจารย์ร่วมกันก่อตั้งโรงเรียนสอนดนตรีแห่งใหม่. (A group of teachers joined together to establish a new music school.)',
			synonym: ['สถาปนา (to found)'],
			antonym: ['ยุบเลิก (to dissolve)'],
		},
		{
			word: 'เข้าร่วม',
			translation: 'to participate',
			pronunciation: 'khao-RUAM',
			example:
				'ชาวบ้านเข้าร่วมงานประเพณีลอยกระทงอย่างคึกคัก. (Villagers actively participate in the Loy Krathong festival.)',
			synonym: ['ร่วมมือ (to join in)'],
			antonym: ['ถอนตัว (to withdraw)'],
		},
		{
			word: 'จินตนาการ',
			translation: 'to imagine',
			pronunciation: 'jin-dta-naa-GAAN',
			example:
				'เด็กๆ จินตนาการถึงการเดินทางไปดวงจันทร์. (Children imagine traveling to the moon.)',
			synonym: ['นึกฝัน (to envision)'],
			antonym: [],
		},
		{
			word: 'ได้รับ',
			translation: 'to receive',
			pronunciation: 'dai-RAP',
			example:
				'เธอได้รับของขวัญวันเกิดจากเพื่อนสนิท. (She received a birthday gift from her close friend.)',
			synonym: ['ได้ (to get)'],
			antonym: ['สูญเสีย (to lose)'],
		},
		{
			word: 'หยุด',
			translation: 'to stop',
			pronunciation: 'YOOT',
			example:
				'คนขับหยุดรถหน้าทางม้าลายเพื่อให้คนข้าม. (The driver stops the car in front of the zebra crossing for pedestrians.)',
			synonym: ['ชะงัก (to halt)'],
			antonym: ['เคลื่อนที่ (to move forward)'],
		},
		{
			word: 'เลือก',
			translation: 'to choose',
			pronunciation: 'LEUAK',
			example:
				'ลูกค้าเลือกซื้อผักสดในตลาดเช้า. (Customers choose fresh vegetables in the morning market.)',
			synonym: ['คัดสรร (to select)'],
			antonym: [],
		},
		{
			word: 'ทนทุกข์',
			translation: 'to suffer',
			pronunciation: 'thon-THOOK',
			example:
				'ผู้ป่วยทนทุกข์จากอาการปวดฟันอย่างรุนแรง. (The patient suffers from a severe toothache.)',
			synonym: ['ทรมาน (to agonize)'],
			antonym: ['มีความสุข (to be happy)'],
		},
		{
			word: 'ให้ยืม',
			translation: 'to lend',
			pronunciation: 'hai-YEUM',
			example:
				'ฉันให้ยืมปากกาสีน้ำเงินแก่เพื่อนร่วมชั้น. (I lent a blue pen to my classmate.)',
			synonym: ['ปล่อยกู้ (to lend money)'],
			antonym: ['ยืม (to borrow)'],
		},
		{
			word: 'อนุญาต',
			translation: 'to allow',
			pronunciation: 'a-nu-YAAT',
			example:
				'คุณครูอนุญาตให้นักเรียนออกไปดื่มน้ำได้. (The teacher allows students to go out and drink water.)',
			synonym: ['ยินยอม (to consent)'],
			antonym: ['ห้าม (to forbid)'],
		},
		{
			word: 'ประกาศ',
			translation: 'to declare',
			pronunciation: 'pra-GAAT',
			example:
				'รัฐบาลประกาศวันหยุดราชการเพิ่มเติมในปีนี้. (The government declares additional public holidays this year.)',
			synonym: ['แถลง (to announce)'],
			antonym: ['ปกปิด (to conceal)'],
		},
		{
			word: 'ยืนยัน',
			translation: 'to affirm',
			pronunciation: 'yeun-YAN',
			example:
				'ผู้โดยสารต้องยืนยันที่นั่งก่อนขึ้นเครื่องบิน. (Passengers must confirm their seats before boarding the airplane.)',
			synonym: ['รับรอง (to certify)'],
			antonym: ['ปฏิเสธ (to deny)'],
		},
		{
			word: 'เปรียบเทียบ',
			translation: 'to compare',
			pronunciation: 'preeap-THEEAP',
			example:
				'ผู้ซื้อเปรียบเทียบราคาสินค้าจากสองร้านก่อนตัดสินใจ. (The buyer compares product prices between two stores before deciding.)',
			synonym: ['เทียบเคียง (to contrast)'],
			antonym: [],
		},
		{
			word: 'รับรอง',
			translation: 'to assure',
			pronunciation: 'rap-RONG',
			example:
				'ผู้จัดการรับรองคุณภาพสินค้าว่าปลอดภัยทุกชิ้น. (The manager assures the quality of all goods is safe.)',
			synonym: ['ยืนยัน (to certify)'],
			antonym: [],
		},
		{
			word: 'สนับสนุน',
			translation: 'to support',
			pronunciation: 'sa-nap-sa-NOON',
			example:
				"พ่อแม่สนับสนุนการเรียนศิลปะของลูกสาวอย่างเต็มที่. (Parents fully support their daughter's art studies.)",
			synonym: ['ส่งเสริม (to promote)'],
			antonym: ['คัดค้าน (to oppose)'],
		},
		{
			word: 'ตรวจสอบ',
			translation: 'to check',
			pronunciation: 'truat-SOP',
			example:
				"เจ้าหน้าที่ตรวจสอบเอกสารของผู้โดยสารที่ด่านตรวจ. (The officer checks passengers' travel documents at the checkpoint.)",
			synonym: ['ตรวจตรา (to inspect)'],
			antonym: [],
		},
		{
			word: 'เสี่ยง',
			translation: 'to risk',
			pronunciation: 'SEEANG',
			example:
				'คนขับรถไม่ควรเสี่ยงขับรถเร็วขณะฝนตกหนัก. (Drivers should not risk speeding during heavy rainfall.)',
			synonym: ['ผจญภัย (to venture)'],
			antonym: [],
		},
		{
			word: 'ปกป้อง',
			translation: 'to defend',
			pronunciation: 'pok-PONG',
			example:
				'สุนัขเห่าเพื่อปกป้องเจ้าของจากคนแปลกหน้า. (The dog barks to defend its owner against strangers.)',
			synonym: ['คุ้มกัน (to guard)'],
			antonym: ['ทำร้าย (to harm)'],
		},
		{
			word: 'กระตุ้น',
			translation: 'to provoke',
			pronunciation: 'kra-TOON',
			example:
				'กาแฟช่วยกระตุ้นให้ร่างกายรู้สึกตื่นตัวตอนเช้า. (Coffee helps stimulate the body to feel awake in the morning.)',
			synonym: ['ปลุกเร้า (to arouse)'],
			antonym: ['ระงับ (to suppress)'],
		},
		{
			word: 'ซ่อน',
			translation: 'to hide',
			pronunciation: 'SAWN',
			example:
				'เด็กน้อยซ่อนของเล่นชิ้นโปรดไว้ใต้เตียงนอน. (The little child hides the favorite toy under the bed.)',
			synonym: ['แอบ (to conceal)'],
			antonym: ['เปิดเผย (to reveal)'],
		},
		{
			word: 'ลด',
			translation: 'to reduce',
			pronunciation: 'LOT',
			example:
				'ห้างสรรพสินค้าลดราคาสินค้าเพื่อต้อนรับปีใหม่. (The department store reduces merchandise prices for the New Year.)',
			synonym: ['ผ่อน (to lower)'],
			antonym: ['เพิ่ม (to increase)'],
		},
		{
			word: 'กล่าวหา',
			translation: 'to accuse',
			pronunciation: 'glaao-HAA',
			example:
				'อย่ากล่าวหาผู้อื่นโดยไม่มีหลักฐานชัดเจน. (Do not accuse others without clear evidence.)',
			synonym: ['ฟ้องร้อง (to blame legally)'],
			antonym: ['แก้ต่าง (to defend in speech)'],
		},
		{
			word: 'แปลความ',
			translation: 'to interpret',
			pronunciation: 'plae-khwaam',
			example:
				'ล่ามแปลความหมายของสุนทรพจน์ได้อย่างคล่องแคล่ว. (The interpreter interprets the meaning of the speech fluently.)',
			synonym: ['ตีความ (to construe)'],
			antonym: [],
		},
		{
			word: 'ครอบงำ',
			translation: 'to dominate',
			pronunciation: 'khrawp-NGAM',
			example:
				'ความกลัวเริ่มครอบงำจิตใจของเขาในความมืด. (Fear began to dominate his mind in the dark.)',
			synonym: ['มีอิทธิพลเหนือ (to prevail over)'],
			antonym: [],
		},
		{
			word: 'เต้นรำ',
			translation: 'to dance',
			pronunciation: 'ten-RAM',
			example:
				'คู่รักเต้นรำอย่างมีความสุขในงานเลี้ยงกลางคืน. (The couple danced happily at the evening party.)',
			synonym: ['ฟ้อนรำ (to dance traditionally)'],
			antonym: [],
		},
		{
			word: 'ทำอาหาร',
			translation: 'to cook',
			pronunciation: 'tham-aa-HAAN',
			example:
				'ยายทำอาหารรสชาติอร่อยให้ทุกคนในบ้านกิน. (Grandmother cooks delicious meals for everyone in the house to eat.)',
			synonym: ['ปรุงอาหาร (to prepare food)'],
			antonym: [],
		},
		{
			word: 'วาดรูป',
			translation: 'to draw',
			pronunciation: 'waat-ROOP',
			example:
				'เด็กหญิงใช้สีไม้วาดรูปดอกไม้บนกระดาษ. (The young girl uses colored pencils to draw flowers on paper.)',
			synonym: ['เขียนภาพ (to sketch)'],
			antonym: [],
		},
		{
			word: 'ฝัน',
			translation: 'to dream',
			pronunciation: 'FAN',
			example:
				'เมื่อคืนฉันฝันว่าได้เดินทางไปต่างประเทศ. (Last night I dreamed that I traveled abroad.)',
			synonym: ['นึกฝัน (to envision)'],
			antonym: [],
		},
		{
			word: 'ซ่อม',
			translation: 'to fix',
			pronunciation: 'SAWM',
			example:
				'ช่างมาที่บ้านเพื่อซ่อมเครื่องซักผ้าที่เสีย. (The technician came to the house to fix the broken washing machine.)',
			synonym: ['แก้ไข (to mend)'],
			antonym: ['ทำลาย (to destroy)'],
		},
		{
			word: 'สามารถ',
			translation: 'to be able to',
			pronunciation: 'saa-MAAT',
			example:
				'เขาสามารถพูดภาษาอังกฤษได้อย่างคล่องแคล่ว. (He is able to speak English fluently.)',
			synonym: ['ทำได้ (to manage)'],
			antonym: [],
		},
		{
			word: 'พูด',
			translation: 'to say',
			pronunciation: 'PHOOT',
			example:
				'อาจารย์พูดเตือนใจให้นักศึกษาทุกคนตั้งใจเรียน. (The teacher speaks words of encouragement for all students to study hard.)',
			synonym: ['บอก (to tell)'],
			antonym: ['เงียบ (to keep silent)'],
		},
		{
			word: 'เห็น',
			translation: 'to see',
			pronunciation: 'HEN',
			example:
				'ฉันเห็นนกสีสวยเกาะอยู่บนกิ่งไม้. (I see a beautiful bird perched on the branch.)',
			synonym: ['มองเห็น (to perceive visually)'],
			antonym: [],
		},
		{
			word: 'ให้',
			translation: 'to give',
			pronunciation: 'HAI',
			example:
				'พ่อให้เงินค่าขนมแก่ลูกชายทุกเช้า. (Father gives snack money to his son every morning.)',
			synonym: ['มอบ (to bestow)'],
			antonym: ['รับ (to receive)'],
		},
		{
			word: 'รู้',
			translation: 'to know',
			pronunciation: 'ROO',
			example:
				'ทุกคนรู้ว่าห้องสมุดปิดเวลาหกโมงเย็น. (Everyone knows that the library closes at six in the evening.)',
			synonym: ['ทราบ (to be aware)'],
			antonym: ['ไม่รู้ (to not know)'],
		},
		{
			word: 'อยาก',
			translation: 'to want',
			pronunciation: 'YAAK',
			example:
				'น้องชายอยากกินไอศกรีมรสวานิลลาหลังเลิกเรียน. (My younger brother wants to eat vanilla ice cream after school.)',
			synonym: ['ต้องการ (to desire)'],
			antonym: [],
		},
		{
			word: 'มาถึง',
			translation: 'to arrive',
			pronunciation: 'maa-THEUNG',
			example:
				'รถไฟขบวนแรกมาถึงชานชาลาตอนเช้าตรู่. (The first train arrived at the platform in the early morning.)',
			synonym: ['ถึง (to reach)'],
			antonym: ['จากไป (to depart)'],
		},
		{
			word: 'ผ่าน',
			translation: 'to pass',
			pronunciation: 'PHAAN',
			example:
				'พวกเราเดินผ่านสวนสาธารณะระหว่างทางกลับบ้าน. (We walked past the park on the way back home.)',
			synonym: ['ข้าม (to go beyond)'],
			antonym: [],
		},
		{
			word: 'ต้อง',
			translation: 'must',
			pronunciation: 'TAWNG',
			example:
				'นักเรียนทุกคนต้องทำการบ้านส่งครูในวันพรุ่งนี้. (Every student must submit homework to the teacher tomorrow.)',
			synonym: ['จำเป็นต้อง (to need to)'],
			antonym: [],
		},
		{
			word: 'ดูเหมือน',
			translation: 'to seem',
			pronunciation: 'doo-MEUAN',
			example:
				'ท้องฟ้ามืดครึ้มดูเหมือนว่าฝนกำลังจะตก. (The dark sky seems like it is going to rain.)',
			synonym: ['คล้ายว่า (to appear as)'],
			antonym: [],
		},
		{
			word: 'อยู่',
			translation: 'to stay',
			pronunciation: 'YOO',
			example:
				'คุณยายชอบอยู่บ้านเงียบๆ ในวันอาทิตย์. (Grandmother likes staying at home quietly on Sundays.)',
			synonym: ['พักผ่อน (to remain)'],
			antonym: ['ออกไป (to leave)'],
		},
		{
			word: 'เชื่อ',
			translation: 'to believe',
			pronunciation: 'CHEUA',
			example:
				'ฉันเชื่อในความสามารถของเพื่อนร่วมงานทุกคน. (I believe in the capability of all my coworkers.)',
			synonym: ['ศรัทธา (to trust in)'],
			antonym: ['สงสัย (to doubt)'],
		},
		{
			word: 'นำไป',
			translation: 'to carry',
			pronunciation: 'nam-PAI',
			example:
				'เขาช่วยนำไปส่งพัสดุกล่องนี้ที่ไปรษณีย์. (He helped take and deliver this parcel to the post office.)',
			synonym: ['พาไป (to escort)'],
			antonym: ['นำมา (to bring)'],
		},
		{
			word: 'ติดตาม',
			translation: 'to follow',
			pronunciation: 'dtit-TAAM',
			example:
				'ประชาชนติดตามข่าวสารพยากรณ์อากาศทางโทรทัศน์. (People follow weather forecast news on television.)',
			synonym: ['คอยดู (to track)'],
			antonym: [],
		},
		{
			word: 'พบ',
			translation: 'to meet',
			pronunciation: 'PHOP',
			example:
				'เพื่อนเก่าบังเอิญพบกันที่ร้านกาแฟใกล้สถานี. (Old friends happened to meet at the coffee shop near the station.)',
			synonym: ['เจอ (to encounter)'],
			antonym: ['จากกัน (to part)'],
		},
		{
			word: 'โทร',
			translation: 'to call',
			pronunciation: 'THOH',
			example:
				'ลูกสาวโทรหาคุณแม่เพื่อบอกว่าถึงบ้านแล้ว. (The daughter called mother to tell her that she had reached home.)',
			synonym: ['ติดต่อ (to communicate)'],
			antonym: [],
		},
		{
			word: 'มา',
			translation: 'to come',
			pronunciation: 'MAA',
			example:
				'แขกหลายคนมางานเลี้ยงฉลองวันขึ้นปีใหม่. (Many guests come to the New Year celebration party.)',
			synonym: ['เดินทางมา (to arrive here)'],
			antonym: ['ไป (to go)'],
		},
		{
			word: 'คิด',
			translation: 'to think',
			pronunciation: 'KHIT',
			example:
				'เขากำลังคิดหาวิธีแก้ปัญหาเรื่องงาน. (He is thinking of a way to solve the work problem.)',
			synonym: ['ไตร่ตรอง (to deliberate)'],
			antonym: [],
		},
		{
			word: 'ออกไป',
			translation: 'to go out',
			pronunciation: 'ok-PAI',
			example:
				'พวกเราตัดสินใจออกไปเดินเล่นรับลมหนาวข้างนอก. (We decided to go out for a walk in the cool breeze outside.)',
			synonym: ['ออกข้างนอก (to step out)'],
			antonym: ['เข้ามา (to enter)'],
		},
		{
			word: 'กลับ',
			translation: 'to return',
			pronunciation: 'GLAP',
			example:
				'พ่อกลับถึงบ้านตอนหกโมงเย็นทุกวัน. (Father returns home at six in the evening every day.)',
			synonym: ['หวนคืน (to head back)'],
			antonym: ['ออกเดินทาง (to set out)'],
		},
		{
			word: 'เอา',
			translation: 'to take',
			pronunciation: 'AO',
			example:
				'อย่าลืมเอาสมุดจดบันทึกติดตัวไปด้วยนะ. (Do not forget to take the notebook with you.)',
			synonym: ['หยิบ (to pick up)'],
			antonym: ['ทิ้ง (to discard)'],
		},
		{
			word: 'รู้จัก',
			translation: 'to know someone',
			pronunciation: 'roo-JAK',
			example:
				'ฉันรู้จักเขามาตั้งแต่สมัยเรียนชั้นมัธยม. (I have known him since high school.)',
			synonym: ['คุ้นเคย (to be acquainted with)'],
			antonym: [],
		},
		{
			word: 'อาศัย',
			translation: 'to reside',
			pronunciation: 'aa-SAI',
			example:
				'ครอบครัวของฉันอาศัยอยู่ในอพาร์ตเมนต์กลางเมือง. (My family resides in an apartment downtown.)',
			synonym: ['พำนัก (to inhabit)'],
			antonym: [],
		},
		{
			word: 'รู้สึก',
			translation: 'to feel',
			pronunciation: 'roo-SEUK',
			example:
				'ฉันรู้สึกสดชื่นหลังจากได้ดื่มน้ำผลไม้เย็นๆ. (I feel refreshed after having a cold fruit juice.)',
			synonym: ['สัมผัสได้ (to sense)'],
			antonym: [],
		},
		{
			word: 'มอง',
			translation: 'to look at',
			pronunciation: 'MAWNG',
			example:
				'เด็กๆ ยืนมองขบวนพาเหรดที่เคลื่อนผ่านไป. (Children stand looking at the parade passing by.)',
			synonym: ['แลดู (to gaze)'],
			antonym: [],
		},
		{
			word: 'นับ',
			translation: 'to count',
			pronunciation: 'NAP',
			example:
				'แม่ค้าเริ่มนับเงินทอนให้ลูกค้าอย่างรอบคอบ. (The shopkeeper begins to count change for customers carefully.)',
			synonym: ['คำนวณ (to tally)'],
			antonym: [],
		},
		{
			word: 'เริ่ม',
			translation: 'to start',
			pronunciation: 'ROEM',
			example:
				'นักเรียนเริ่มทำข้อสอบเมื่อได้ยินเสียงสัญญาณ. (Students started doing the exam when they heard the signal.)',
			synonym: ['ตั้งต้น (to commence)'],
			antonym: ['จบ (to finish)'],
		},
		{
			word: 'รอ/หวัง',
			translation: 'to wait or hope',
			pronunciation: 'ror-WANG',
			example:
				'พวกเรานั่งรอหวังว่าจะได้ยินข่าวดีในเร็ววัน. (We sit waiting and hoping to hear good news soon.)',
			synonym: ['คาดหวัง (to anticipate)'],
			antonym: ['หมดหวัง (to despair)'],
		},
		{
			word: 'ค้นหา',
			translation: 'to search for',
			pronunciation: 'khon-HAA',
			example:
				'เขาใช้แว่นขยายค้นหากุญแจที่ทำตกไว้บนพื้น. (He used a magnifying glass to search for the keys dropped on the floor.)',
			synonym: ['ตามหา (to look for)'],
			antonym: [],
		},
		{
			word: 'เข้า',
			translation: 'to enter',
			pronunciation: 'KHAO',
			example:
				'นักท่องเที่ยวเดินเข้าพิพิธภัณฑ์อย่างเป็นระเบียบ. (Tourists walk to enter the museum in an orderly manner.)',
			synonym: ['เข้าไป (to step in)'],
			antonym: ['ออก (to exit)'],
		},
		{
			word: 'เขียน',
			translation: 'to write',
			pronunciation: 'KHEEAN',
			example:
				'นักเขียนเขียนเรื่องสั้นเล่มใหม่เสร็จแล้ว. (The author finished writing the new short story.)',
			synonym: ['จดบันทึก (to note down)'],
			antonym: ['ลบ (to erase)'],
		},
		{
			word: 'แพ้',
			translation: 'to lose a match',
			pronunciation: 'PHAE',
			example:
				'ทีมโรงเรียนเราแพ้การแข่งขันฟุตบอลนัดชิงชนะเลิศ. (Our school team lost the championship football match.)',
			synonym: ['พ่ายแพ้ (to be defeated)'],
			antonym: ['ชนะ (to win)'],
		},
		{
			word: 'ผลิต',
			translation: 'to produce',
			pronunciation: 'pha-LIT',
			example:
				'โรงงานแห่งนี้ผลิตชิ้นส่วนรถยนต์ส่งออกต่างประเทศ. (This factory produces car parts for export overseas.)',
			synonym: ['สร้างสรรค์ (to manufacture)'],
			antonym: [],
		},
		{
			word: 'เกิดขึ้น',
			translation: 'to happen',
			pronunciation: 'goet-KHEUN',
			example:
				'อุบัติเหตุเล็กน้อยเกิดขึ้นบนสะพานข้ามแม่น้ำ. (A minor accident happened on the bridge across the river.)',
			synonym: ['อุบัติขึ้น (to take place)'],
			antonym: [],
		},
		{
			word: 'ขอ',
			translation: 'to ask for',
			pronunciation: 'KHAW',
			example:
				'ลูกค้าขอเมนูอาหารเพิ่มเติมจากพนักงานเสิร์ฟ. (The customer asked for additional menus from the waiter.)',
			synonym: ['ร้องขอ (to request)'],
			antonym: ['ให้ (to give)'],
		},
		{
			word: 'จบ',
			translation: 'to finish',
			pronunciation: 'JOP',
			example:
				"ภาพยนตร์สนุกเรื่องนี้จบลงด้วยรอยยิ้มของทุกคน. (This fun movie finished with everyone's smiles.)",
			synonym: ['สิ้นสุด (to end)'],
			antonym: ['เริ่ม (to begin)'],
		},
		{
			word: 'ปรากฏ',
			translation: 'to appear',
			pronunciation: 'praa-GOT',
			example:
				'รุ้งกินน้ำปรากฏขึ้นบนท้องฟ้าหลังฝนหยุดตก. (A rainbow appeared in the sky after the rain stopped.)',
			synonym: ['แสดงตัว (to show up)'],
			antonym: ['หายไป (to disappear)'],
		},
		{
			word: 'เริ่มต้น',
			translation: 'to begin',
			pronunciation: 'roem-TON',
			example:
				'บริษัทเริ่มต้นโครงการอนุรักษ์สิ่งแวดล้อมใหม่. (The company began a new environmental conservation project.)',
			synonym: ['ริเริ่ม (to initiate)'],
			antonym: ['สิ้นสุด (to conclude)'],
		},
		{
			word: 'ให้บริการ',
			translation: 'to serve',
			pronunciation: 'hai-bor-ri-GAAN',
			example:
				'พนักงานเคาน์เตอร์ให้บริการลูกค้าด้วยรอยยิ้ม. (Counter staff serve customers with a polite smile.)',
			synonym: ['ดูแล (to attend)'],
			antonym: [],
		},
		{
			word: 'เอาออก',
			translation: 'to take out',
			pronunciation: 'ao-OK',
			example:
				'แม่เอาขนมปังออกจากเตาอบที่ร้อนจัด. (Mother took the bread out of the hot oven.)',
			synonym: ['ถอดออก (to remove)'],
			antonym: ['ใส่เข้า (to put in)'],
		},
		{
			word: 'ต้องการ',
			translation: 'to need',
			pronunciation: 'tawng-GAAN',
			example:
				'ผู้ประสบภัยต้องการน้ำดื่มสะอาดและอาหารแห้ง. (Disaster victims need clean drinking water and dry food.)',
			synonym: ['ปรารถนา (to require)'],
			antonym: [],
		},
		{
			word: 'อ่าน',
			translation: 'to read',
			pronunciation: 'AAN',
			example:
				'เด็กชายนั่งอ่านหนังสือนิทานอยู่บนเก้าอี้โยก. (The boy sits reading a storybook on the rocking chair.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ล้ม',
			translation: 'to fall over',
			pronunciation: 'LOM',
			example:
				'ลมแรงพัดจนต้นไม้ใหญ่ล้มขวางถนนสายหลัก. (Strong wind blew until a large tree fell across the main road.)',
			synonym: ['ล้มลง (to tumble)'],
			antonym: ['ลุกขึ้น (to stand up)'],
		},
		{
			word: 'เปลี่ยน',
			translation: 'to change',
			pronunciation: 'PLEEAN',
			example:
				'ใบไม้เริ่มเปลี่ยนเป็นสีเหลืองเมื่อเข้าสู่ฤดูใบไม้ร่วง. (Leaves begin to change to yellow when autumn arrives.)',
			synonym: ['ปรับเปลี่ยน (to alter)'],
			antonym: ['คงเดิม (to remain unchanged)'],
		},
		{
			word: 'ส่งมอบ',
			translation: 'to deliver',
			pronunciation: 'song-MAWP',
			example:
				"บุรุษไปรษณีย์ส่งมอบพัสดุด่วนถึงมือผู้รับแล้ว. (The postman delivered the express parcel right into the recipient's hands.)",
			synonym: ['ยื่นมอบ (to hand over)'],
			antonym: ['รับมอบ (to accept delivery)'],
		},
		{
			word: 'แก้ไข',
			translation: 'to solve',
			pronunciation: 'gae-KHAI',
			example:
				'โปรแกรมเมอร์แก้ไขข้อผิดพลาดในระบบเสร็จทันเวลา. (The programmer solved errors in the system in time.)',
			synonym: ['ปรับปรุง (to fix)'],
			antonym: [],
		},
		{
			word: 'ทำให้สับสน',
			translation: 'to confuse',
			pronunciation: 'tham-hai-sap-SON',
			example:
				'ป้ายบอกทางที่คลุมเครือทำให้สับสนอย่างมาก. (The ambiguous road signs confuse drivers greatly.)',
			synonym: ['ทำให้งุนงง (to baffle)'],
			antonym: ['ทำให้ชัดเจน (to clarify)'],
		},
		{
			word: 'กังวล',
			translation: 'to worry',
			pronunciation: 'gang-WON',
			example:
				'แม่รู้สึกกังวลเมื่อลูกชายยังไม่กลับบ้านตามเวลา. (Mother feels worried when her son does not return home on time.)',
			synonym: ['ห่วงใย (to be anxious)'],
			antonym: ['เบาใจ (to feel relieved)'],
		},
		{
			word: 'เฉลิมฉลอง',
			translation: 'to celebrate',
			pronunciation: 'cha-loem-cha-LAWNG',
			example:
				'ชาวบ้านร่วมกันเฉลิมฉลองเทศกาลปีใหม่ในลานหมู่บ้าน. (Villagers gather to celebrate the New Year festival in the village square.)',
			synonym: ['สมโภช (to feast)'],
			antonym: [],
		},
		{
			word: 'ลง',
			translation: 'to descend',
			pronunciation: 'LONG',
			example:
				'ผู้โดยสารค่อยๆ เดินลงจากบันไดเครื่องบิน. (Passengers slowly walk to descend from the airplane stairs.)',
			synonym: ['ก้าวลง (to step down)'],
			antonym: ['ขึ้น (to ascend)'],
		},
		{
			word: 'ขอบคุณ',
			translation: 'to thank',
			pronunciation: 'khawp-KHOON',
			example:
				'เด็กน้อยยกมือไหว้ขอบคุณผู้ใหญ่ที่ให้ขนม. (The little child bowed to thank the adult who gave snacks.)',
			synonym: ['ขอบใจ (to thank informally)'],
			antonym: [],
		},
		{
			word: 'ไว้ใจ',
			translation: 'to trust',
			pronunciation: 'wai-JAI',
			example:
				'เราสามารถไว้ใจเพื่อนสนิทคนนี้ได้เสมอ. (We can always trust this close friend.)',
			synonym: ['เชื่อมั่น (to rely on)'],
			antonym: ['ระแวง (to distrust)'],
		},
		{
			word: 'โกหก',
			translation: 'to lie',
			pronunciation: 'goh-HOK',
			example:
				'คนดีจะไม่พูดโกหกเพื่อหลอกลวงผู้อื่น. (Good people will not lie to deceive others.)',
			synonym: ['มุสา (to fabricate falsehood)'],
			antonym: ['พูดความจริง (to tell the truth)'],
		},
		{
			word: 'ทำบาป',
			translation: 'to sin',
			pronunciation: 'tham-BAAP',
			example:
				'ศาสนาสอนให้คนละเว้นจากการทำบาปทั้งปวง. (Religion teaches people to refrain from sinning altogether.)',
			synonym: ['ประพฤติชั่ว (to commit misdeeds)'],
			antonym: ['ทำบุญ (to make merit)'],
		},
		{
			word: 'สืบสวน',
			translation: 'to investigate',
			pronunciation: 'seup-SUAN',
			example:
				'ตำรวจเร่งสืบสวนหาตัวคนร้ายที่ขโมยทรัพย์สิน. (Police quickly investigate to find the culprit who stole property.)',
			synonym: ['ไต่สวน (to probe)'],
			antonym: [],
		},
		{
			word: 'หนี',
			translation: 'to flee',
			pronunciation: 'NEE',
			example:
				'กระต่ายป่ารีบวิ่งหนีสุนัขจิ้งจอกเข้าไปในโพรงหญ้า. (The wild hare quickly ran to flee the fox into the grass burrow.)',
			synonym: ['หลบหนี (to escape)'],
			antonym: ['เผชิญหน้า (to face)'],
		},
		{
			word: 'นำทาง',
			translation: 'to navigate',
			pronunciation: 'nam-THAANG',
			example:
				'คนในท้องถิ่นช่วยนำทางกลุ่มนักท่องเที่ยวเดินป่า. (A local resident helped navigate the trekking group through the forest.)',
			synonym: ['ชี้ทาง (to guide)'],
			antonym: [],
		},
		{
			word: 'หายไป',
			translation: 'to disappear',
			pronunciation: 'haai-PAI',
			example:
				'นกพิราบตัวนั้นบินหายไปในหมอกยามเช้า. (That pigeon flew and disappeared into the morning mist.)',
			synonym: ['ลับตา (to vanish)'],
			antonym: ['ปรากฏ (to appear)'],
		},
		{
			word: 'เดา',
			translation: 'to guess',
			pronunciation: 'DAO',
			example:
				'นักเรียนลองเดาคำตอบก่อนที่ครูจะเฉลย. (The student tried to guess the answer before the teacher revealed it.)',
			synonym: ['คาดเดา (to speculate)'],
			antonym: [],
		},
		{
			word: 'เชื่อฟัง',
			translation: 'to obey',
			pronunciation: 'cheua-FANG',
			example:
				'ลูกที่ดีควรเชื่อฟังคำสั่งสอนของบิดามารดา. (Good children should obey the teachings of their parents.)',
			synonym: ['ปฏิบัติตาม (to comply with)'],
			antonym: ['ดื้อดึง (to disobey)'],
		},
		{
			word: 'เข้าใจผิด',
			translation: 'to be mistaken',
			pronunciation: 'khao-jai-PHIT',
			example:
				'ฉันเข้าใจผิดคิดว่าวันนี้เป็นวันหยุดราชการ. (I was mistaken thinking that today was a public holiday.)',
			synonym: ['สำคัญผิด (to misjudge)'],
			antonym: ['เข้าใจถูกต้อง (to understand correctly)'],
		},
		{
			word: 'บ่น',
			translation: 'to complain',
			pronunciation: 'BON',
			example:
				'คุณลุงชอบบ่นเรื่องสภาพอากาศร้อนอบอ้าวทุกบ่าย. (The uncle likes to complain about the muggy hot weather every afternoon.)',
			synonym: ['ตัดพ้อ (to grumble)'],
			antonym: ['ชมเชย (to praise)'],
		},
		{
			word: 'เดิน',
			translation: 'to walk',
			pronunciation: 'DOEN',
			example:
				'ยายเดินออกกำลังกายรอบหมู่บ้านทุกตอนเย็น. (Grandmother walks for exercise around the village every evening.)',
			synonym: ['ก้าวเดิน (to stride)'],
			antonym: ['วิ่ง (to run)'],
		},
		{
			word: 'ขี่',
			translation: 'to ride',
			pronunciation: 'KHEE',
			example:
				'เด็กๆ ชอบขี่จักรยานเล่นในลานกว้างหน้าบ้าน. (Children like to ride bicycles playfully in the wide front yard.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ขับ',
			translation: 'to drive',
			pronunciation: 'KHAP',
			example:
				'พ่อขับรถยนต์ไปส่งลูกที่โรงเรียนแต่เช้า. (Father drives the car to drop his child off at school early.)',
			synonym: ['บังคับรถ (to steer a vehicle)'],
			antonym: [],
		},
		{
			word: 'ว่ายน้ำ',
			translation: 'to swim',
			pronunciation: 'waai-NAM',
			example:
				'นักเรียนฝึกว่ายน้ำในสระของโรงเรียนทุกวันศุกร์. (Students practice swimming in the school pool every Friday.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ปีน',
			translation: 'to climb',
			pronunciation: 'PEEN',
			example:
				'ลิงตัวเล็กปีนขึ้นไปเก็บบนยอดมะพร้าวอย่างว่องไว. (The little monkey climbed up swiftly to gather coconuts.)',
			synonym: ['ไต่ (to scale)'],
			antonym: [],
		},
		{
			word: 'คลาน',
			translation: 'to crawl',
			pronunciation: 'KHLAAN',
			example:
				'เด็กทารกเริ่มคลานบนพรมในห้องนั่งเล่นอย่างสนุกสนาน. (The baby begins to crawl playfully on the carpet in the living room.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เตะ',
			translation: 'to kick',
			pronunciation: 'TE',
			example:
				'นักกีฬาเตะลูกฟุตบอลเข้าประตูอย่างสวยงาม. (The athlete kicked the football into the goal splendidly.)',
			synonym: ['ถีบ (to strike with foot)'],
			antonym: [],
		},
		{
			word: 'ขุด',
			translation: 'to dig',
			pronunciation: 'KHOOT',
			example:
				'ชาวสวนใช้จอบขุดหลุมเพื่อเตรียมปลูกต้นกล้า. (The gardener uses a hoe to dig holes in preparation for planting saplings.)',
			synonym: ['ขุดดิน (to excavate soil)'],
			antonym: ['กลบ (to fill in)'],
		},
		{
			word: 'เคาะ',
			translation: 'to knock',
			pronunciation: 'KHAW',
			example:
				'โปรดเคาะประตูก่อนเปิดเข้าไปในห้องทำงาน. (Please knock on the door before opening and entering the office.)',
			synonym: ['ตีเบาๆ (to tap)'],
			antonym: [],
		},
		{
			word: 'ดึง',
			translation: 'to pull',
			pronunciation: 'DEUNG',
			example:
				'เขาออกแรงดึงเชือกเพื่อเปิดม่านรับแสงแดด. (He pulled the cord forcefully to open the curtain for sunlight.)',
			synonym: ['ลาก (to drag)'],
			antonym: ['ผลัก (to push)'],
		},
		{
			word: 'กิน',
			translation: 'to eat',
			pronunciation: 'GIN',
			example:
				'ครอบครัวเรานั่งกินข้าวพร้อมหน้ากันทุกมื้อค่ำ. (Our family sits together eating rice every evening meal.)',
			synonym: ['รับประทาน (to dine)'],
			antonym: [],
		},
		{
			word: 'ดื่ม',
			translation: 'to drink',
			pronunciation: 'DEUM',
			example:
				'หมอแนะนำให้ดื่มน้ำสะอาดอย่างน้อยวันละแปดแก้ว. (The doctor recommends drinking at least eight glasses of clean water daily.)',
			synonym: ['จิบ (to sip)'],
			antonym: [],
		},
		{
			word: 'นอน',
			translation: 'to sleep',
			pronunciation: 'NAWN',
			example:
				'เด็กน้อยนอนหลับปุ๋ยอยู่บนเตียงนุ่มๆ ในห้อง. (The little child sleeps soundly on the soft bed in the room.)',
			synonym: ['บรรทม (to sleep royal)'],
			antonym: ['ตื่น (to wake up)'],
		},
		{
			word: 'ตื่น',
			translation: 'to wake up',
			pronunciation: 'TEUN',
			example:
				'ฉันตื่นนอนตอนตีห้าเพื่อเตรียมตัวไปวิ่งออกกำลังกาย. (I wake up at five in the morning to prepare for a running workout.)',
			synonym: ['ฟื้น (to revive)'],
			antonym: ['หลับ (to fall asleep)'],
		},
		{
			word: 'หิว',
			translation: 'to be hungry',
			pronunciation: 'HEW',
			example:
				'หลังจากเดินป่าทั้งวันพวกเรารู้สึกหิวข้าวมาก. (After trekking all day, we felt very hungry for a meal.)',
			synonym: ['โหยหิว (to crave food)'],
			antonym: ['อิ่ม (to be full)'],
		},
		{
			word: 'เคี้ยว',
			translation: 'to chew',
			pronunciation: 'KHEEAW',
			example:
				'เราควรเคี้ยวอาหารให้ละเอียดก่อนกลืนลงคอ. (We should chew food thoroughly before swallowing it down.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กลืน',
			translation: 'to swallow',
			pronunciation: 'KLEUN',
			example:
				'คนไข้กลืนยาเม็ดพร้อมกับดื่มน้ำตามหนึ่งแก้ว. (The patient swallowed the pill along with drinking a glass of water.)',
			synonym: [],
			antonym: ['คาย (to spit out)'],
		},
		{
			word: 'ต้ม',
			translation: 'to boil',
			pronunciation: 'TOM',
			example:
				'แม่ต้มไข่ไก่ในหม้อน้ำเดือดสำหรับมื้อเช้า. (Mother boils chicken eggs in a pot of boiling water for breakfast.)',
			synonym: ['เคี่ยว (to simmer)'],
			antonym: [],
		},
		{
			word: 'ทอด',
			translation: 'to fry',
			pronunciation: 'THAWT',
			example:
				'พ่อครัวทอดปลาในกระทะจนมีสีเหลืองกรอบน่ากิน. (The cook fries fish in the pan until it turns golden crispy and appetizing.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ย่าง',
			translation: 'to grill',
			pronunciation: 'YAANG',
			example:
				'พวกเราย่างเนื้อไก่บนเตาถ่านส่งกลิ่นหอมฟุ้ง. (We grill chicken over charcoal emitting a wonderful aroma.)',
			synonym: ['ปิ้ง (to barbecue)'],
			antonym: [],
		},
		{
			word: 'กระซิบ',
			translation: 'to whisper',
			pronunciation: 'kra-SIP',
			example:
				"เธอโน้มตัวลงมากระซิบความลับเบาๆ ที่ข้างหูเพื่อน. (She leaned down to whisper the secret softly into her friend's ear.)",
			synonym: [],
			antonym: ['ตะโกน (to shout)'],
		},
		{
			word: 'แนะนำ',
			translation: 'to suggest',
			pronunciation: 'nae-NAM',
			example:
				'เพื่อนแนะนำร้านอาหารพื้นเมืองอร่อยๆ ให้ฉันลองชิม. (A friend suggested delicious local eateries for me to try.)',
			synonym: ['เสนอแนะ (to recommend)'],
			antonym: [],
		},
		{
			word: 'สัญญา',
			translation: 'to promise',
			pronunciation: 'san-YAA',
			example:
				'เขาให้คำสัญญาว่าจะกลับมาเยี่ยมบ้านเกิดปีละครั้ง. (He gave a promise that he would return to visit his hometown once a year.)',
			synonym: ['รับปาก (to give word)'],
			antonym: ['ผิดสัญญา (to break a promise)'],
		},
		{
			word: 'ตัดสินใจ',
			translation: 'to decide',
			pronunciation: 'tat-sin-JAI',
			example:
				'เธอตัดสินใจสมัครเข้าเรียนต่อในสาขาวิทยาศาสตร์. (She decided to apply for further studies in the science track.)',
			synonym: ['ตกลงใจ (to resolve)'],
			antonym: ['ลังเล (to hesitate)'],
		},
		{
			word: 'แปล',
			translation: 'to translate',
			pronunciation: 'PLAE',
			example:
				'นักศึกษานั่งแปลบทความภาษาอังกฤษเป็นภาษาไทยในห้องสมุด. (The student sits translating an English article into Thai in the library.)',
			synonym: ['ถ่ายทอด (to render)'],
			antonym: [],
		},
		{
			word: 'เตือนความจำ',
			translation: 'to remind',
			pronunciation: 'teuan-khwaam-JAM',
			example:
				'เสียงนาฬิกาปลุกช่วยเตือนความจำเรื่องนัดหมายสำคัญตอนบ่าย. (The alarm clock sound helps remind me about an important afternoon meeting.)',
			synonym: ['สะกิดใจ (to prompt memory)'],
			antonym: [],
		},
		{
			word: 'ยอมแพ้',
			translation: 'to surrender',
			pronunciation: 'yawm-PHAE',
			example:
				'แม้การแข่งขันจะยากลำบากแต่นักกีฬาก็ไม่ยอมแพ้. (Although the contest was difficult, the athlete did not surrender.)',
			synonym: ['ถอดใจ (to give up)'],
			antonym: ['สู้ต่อ (to keep fighting)'],
		},
		{
			word: 'ขาย',
			translation: 'to sell',
			pronunciation: 'KHAAI',
			example:
				'ชาวสวนนำผลไม้สดมาขายที่ตลาดนัดทุกเช้าวันเสาร์. (The orchardist brings fresh fruits to sell at the morning market every Saturday.)',
			synonym: ['จำหน่าย (to merchandise)'],
			antonym: ['ซื้อ (to buy)'],
		},
		{
			word: 'ซื้อ',
			translation: 'to buy',
			pronunciation: 'SEU',
			example:
				'ฉันแวะซื้อขนมปังและนมจืดที่ร้านสะดวกซื้อหน้าปากซอย. (I stopped by to buy bread and plain milk at the convenience store down the street.)',
			synonym: ['จัดหา (to acquire)'],
			antonym: ['ขาย (to sell)'],
		},
		{
			word: 'ยืม',
			translation: 'to borrow',
			pronunciation: 'YEUM',
			example:
				'นักเรียนยืมหนังสือประวัติศาสตร์จากห้องสมุดไปอ่านที่บ้าน. (The student borrows history books from the library to read at home.)',
			synonym: ['กู้ยืม (to take a loan)'],
			antonym: ['คืน (to return borrowed item)'],
		},
		{
			word: 'จ้าง',
			translation: 'to hire',
			pronunciation: 'JAANG',
			example:
				'เจ้าของบ้านจ้างช่างทาสีมาตกแต่งกำแพงรั้วใหม่. (The homeowner hires a painter to redecorate the perimeter fence.)',
			synonym: ['ว่าจ้าง (to employ)'],
			antonym: ['เลิกจ้าง (to dismiss)'],
		},
		{
			word: 'ลาออก',
			translation: 'to resign',
			pronunciation: 'laa-OK',
			example:
				'พนักงานตัดสินใจยื่นใบลาออกเพื่อไปเริ่มต้นทำธุรกิจส่วนตัว. (The employee decided to submit a resignation letter to start an independent business.)',
			synonym: ['สละตำแหน่ง (to vacate office)'],
			antonym: ['เข้าทำงาน (to take employment)'],
		},
		{
			word: 'ลงทุน',
			translation: 'to invest',
			pronunciation: 'long-THOON',
			example:
				'นักธุรกิจตัดสินใจลงทุนสร้างโรงงานผลิตพลังงานแสงอาทิตย์. (The entrepreneur decided to invest in building a solar power plant.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ต่อรอง',
			translation: 'to negotiate',
			pronunciation: 'dtor-RAWNG',
			example:
				'ลูกค้าพยายามต่อรองราคาสินค้ากับแม่ค้าในตลาดนัด. (The customer attempts to negotiate product prices with the market vendor.)',
			synonym: ['เจรจา (to parley)'],
			antonym: [],
		},
		{
			word: 'สั่ง',
			translation: 'to order',
			pronunciation: 'SANG',
			example:
				'เรานั่งลงที่โต๊ะแล้วสั่งอาหารพื้นเมืองมารับประทาน. (We sat down at the table and ordered local dishes to dine on.)',
			synonym: ['บัญชา (to command)'],
			antonym: [],
		},
		{
			word: 'พิมพ์',
			translation: 'to type',
			pronunciation: 'PHIM',
			example:
				'เลขานุการพิมพ์รายงานการประชุมลงในคอมพิวเตอร์อย่างรวดเร็ว. (The secretary types meeting minutes into the computer rapidly.)',
			synonym: ['คีย์ข้อมูล (to key in data)'],
			antonym: [],
		},
		{
			word: 'ลงชื่อ',
			translation: 'to sign',
			pronunciation: 'long-CHEUA',
			example:
				'ผู้สมัครทุกคนต้องลงชื่อในเอกสารยินยอมก่อนเริ่มทำสัญญา. (Every applicant must sign the consent document before starting the contract.)',
			synonym: ['เซ็นชื่อ (to autograph)'],
			antonym: [],
		},
		{
			word: 'โกรธ',
			translation: 'to be angry',
			pronunciation: 'GROT',
			example:
				'เขาโกรธเมื่อพบว่ามีคนแอบหยิบสิ่งของส่วนตัวไปโดยไม่บอก. (He became angry upon finding that someone secretly took his belongings without telling.)',
			synonym: ['โมโห (to be enraged)'],
			antonym: ['อารมณ์ดี (to be in a good mood)'],
		},
		{
			word: 'กลัว',
			translation: 'to fear',
			pronunciation: 'GLUA',
			example:
				'เด็กเล็กๆ มักจะกลัวเสียงฟ้าร้องดังลั่นในคืนฝนตก. (Small toddlers usually fear thunder cracking loudly on rainy nights.)',
			synonym: ['หวาดหวั่น (to dread)'],
			antonym: ['กล้าหาญ (to be brave)'],
		},
		{
			word: 'ตกใจ',
			translation: 'to be shocked',
			pronunciation: 'tok-JAI',
			example:
				'เธอสะดุ้งตกใจเมื่อมีแมววิ่งตัดหน้าในความมืด. (She flinched in shock when a cat darted across her path in the dark.)',
			synonym: ['ตระหนก (to panic)'],
			antonym: ['ใจเย็น (to remain calm)'],
		},
		{
			word: 'เสียใจ',
			translation: 'to be sorry',
			pronunciation: 'seea-JAI',
			example:
				"ฉันรู้สึกเสียใจมากที่ทำของขวัญชิ้นสำคัญของคุณแม่แตก. (I feel very sorry that I broke mother's precious gift.)",
			synonym: ['เศร้าใจ (to grieve)'],
			antonym: ['ดีใจ (to rejoice)'],
		},
		{
			word: 'ดีใจ',
			translation: 'to be happy',
			pronunciation: 'dee-JAI',
			example:
				'ลูกๆ ต่างดีใจเมื่อรู้ว่าพ่อแม่จะพาไปเที่ยวทะเลสุดสัปดาห์นี้. (The children rejoiced learning their parents would take them to the seaside this weekend.)',
			synonym: ['ยินดี (to be pleased)'],
			antonym: ['เสียใจ (to be sad)'],
		},
		{
			word: 'เบื่อ',
			translation: 'to be bored',
			pronunciation: 'BEUA',
			example:
				'เขารู้สึกเบื่อเมื่อต้องนั่งรอคิวในแถวยาวเป็นเวลานาน. (He feels bored when having to sit and wait in a long queue for a long time.)',
			synonym: ['เซ็ง (to be fed up)'],
			antonym: ['เพลิดเพลิน (to enjoy oneself)'],
		},
		{
			word: 'อิจฉา',
			translation: 'to envy',
			pronunciation: 'it-CHAA',
			example:
				'เราไม่ควรมีความรู้สึกอิจฉาในความสำเร็จของผู้อื่น. (We should not hold feelings of envy toward the success of others.)',
			synonym: ['ริษยา (to resent)'],
			antonym: ['ยินดีด้วย (to rejoice with)'],
		},
		{
			word: 'เกรงใจ',
			translation: 'to be considerate',
			pronunciation: 'greng-JAI',
			example:
				'เขาเกรงใจเพื่อนบ้านจึงไม่เปิดเพลงเสียงดังในยามวิกาล. (He is considerate of neighbors and does not play loud music late at night.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'สนใจ',
			translation: 'to be interested',
			pronunciation: 'son-JAI',
			example:
				'นักเรียนหลายคนเริ่มสนใจเรียนภาษาต่างประเทศเพิ่มเติม. (Many students begin to be interested in studying extra foreign languages.)',
			synonym: ['ใส่ใจ (to pay heed)'],
			antonym: ['เพิกเฉย (to ignore)'],
		},
		{
			word: 'เหนื่อย',
			translation: 'to be tired',
			pronunciation: 'NEUAY',
			example:
				'คนงานรู้สึกเหนื่อยหลังจากขนย้ายสิ่งของหนักตลอดทั้งบ่าย. (The laborer felt tired after hauling heavy items all afternoon.)',
			synonym: ['เมื่อยล้า (to be exhausted)'],
			antonym: ['กระปรี้กระเปร่า (to be energetic)'],
		},
		{
			word: 'แปรงฟัน',
			translation: 'to brush teeth',
			pronunciation: 'praeng-FAN',
			example:
				'เด็กดีแปรงฟันอย่างทั่วถึงทั้งตอนเช้าและก่อนเข้านอน. (Good children brush their teeth thoroughly both in the morning and before sleep.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แต่งตัว',
			translation: 'to get dressed',
			pronunciation: 'taeng-TUA',
			example:
				'เขาแต่งตัวด้วยเสื้อเชิ้ตสุภาพเพื่อไปสัมภาษณ์งานใหม่. (He gets dressed in a polite collared shirt to attend a new job interview.)',
			synonym: ['สวมใส่เสื้อผ้า (to put on clothes)'],
			antonym: [],
		},
		{
			word: 'แปรงฟัน',
			translation: 'to brush teeth',
			pronunciation: 'praeng-FAN',
			example:
				'เด็กทุกคนควรแปรงฟันวันละสองครั้งหลังอาหาร. (Every child should brush teeth twice a day after meals.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แต่งตัว',
			translation: 'to get dressed',
			pronunciation: 'taeng-DUA',
			example:
				'เขารีบแต่งตัวด้วยชุดทำงานเรียบร้อยตั้งแต่เช้า. (He hurries to get dressed in a neat work outfit since morning.)',
			synonym: ['สวมเสื้อผ้า (to put on clothes)'],
			antonym: ['ถอดเสื้อผ้า (to undress)'],
		},
		{
			word: 'ล้าง',
			translation: 'to wash',
			pronunciation: 'LAANG',
			example:
				'แม่ครัวล้างผักสดในอ่างน้ำไหลจนสะอาดหมดจด. (The cook washes fresh vegetables in running water until thoroughly clean.)',
			synonym: ['ชำระ (to cleanse)'],
			antonym: ['ทำให้สกปรก (to dirty)'],
		},
		{
			word: 'ซักผ้า',
			translation: 'to wash clothes',
			pronunciation: 'sak-PHAA',
			example:
				'ป้าตื่นมาซักผ้ากองโตในวันหยุดสุดสัปดาห์. (Aunt wakes up to wash a big pile of clothes over the weekend.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กวาด',
			translation: 'to sweep',
			pronunciation: 'GWAAT',
			example:
				'ภารโรงกวาดใบไม้แห้งออกจากลานโรงเรียนทุกเช้า. (The janitor sweeps dry leaves off the school grounds every morning.)',
			synonym: ['ปัดกวาด (to sweep and dust)'],
			antonym: [],
		},
		{
			word: 'ถู',
			translation: 'to mop',
			pronunciation: 'THOO',
			example:
				'แม่บ้านถูพื้นกระเบื้องในห้องครัวจนแห้งสนิท. (The housekeeper mopped the tile floor in the kitchen until completely dry.)',
			synonym: ['เช็ด (to wipe)'],
			antonym: [],
		},
		{
			word: 'รีดผ้า',
			translation: 'to iron',
			pronunciation: 'reet-PHAA',
			example:
				'พี่สาวเปิดเตารีดไฟฟ้ารีดผ้าเชิ้ตสีขาวเรียบกริบ. (Older sister turned on the iron to smoothly press the white shirt.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'รดน้ำ',
			translation: 'to water',
			pronunciation: 'rot-NAM',
			example:
				'คนสวนรดน้ำแปลงดอกไม้ในตอนเย็นหลังแดดร่ม. (The gardener waters the flower beds in the evening after shade sets.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ซ่อมแซม',
			translation: 'to repair',
			pronunciation: 'sawm-SAEM',
			example:
				'ช่างไม้ซ่อมแซมบันไดไม้เก่าที่ชำรุดให้แข็งแรง. (The carpenter repairs the old damaged wooden stairs to be sturdy.)',
			synonym: ['ปรับปรุง (to renovate)'],
			antonym: ['ทำลาย (to destroy)'],
		},
		{
			word: 'ทิ้ง',
			translation: 'to throw away',
			pronunciation: 'THING',
			example:
				'โปรดนำเศษกระดาษไปทิ้งลงในถังขยะด้านนอก. (Please take scrap paper and throw it into the outside bin.)',
			synonym: ['ละทิ้ง (to discard)'],
			antonym: ['เก็บไว้ (to keep)'],
		},
		{
			word: 'ทักทาย',
			translation: 'to greet',
			pronunciation: 'thak-THAAI',
			example:
				'เพื่อนบ้านยกมือไหว้ทักทายกันอย่างเป็นมิตรยามเช้า. (Neighbors raise hands in greeting each other amicably in the morning.)',
			synonym: ['ปราศรัย (to converse cordially)'],
			antonym: ['เมินเฉย (to ignore)'],
		},
		{
			word: 'จูบ',
			translation: 'to kiss',
			pronunciation: 'JOOP',
			example:
				"แม่ก้มลงจูบหน้าผากลูกสาวก่อนนอนหลับฝันดี. (Mother leaned down to kiss her daughter's forehead before sweet dreams.)",
			synonym: ['หอมแก้ม (to kiss cheek)'],
			antonym: [],
		},
		{
			word: 'กอด',
			translation: 'to hug',
			pronunciation: 'GAWT',
			example:
				'สองพี่น้องกอดกันแน่นด้วยความคิดถึงหลังไม่ได้เจอกันนาน. (The two siblings hugged tightly out of longing after long separation.)',
			synonym: ['สวมกอด (to embrace)'],
			antonym: ['ผลักไส (to shove away)'],
		},
		{
			word: 'นัด',
			translation: 'to make an appointment',
			pronunciation: 'NAT',
			example:
				'หมอนัดคนไข้มาตรวจติดตามอาการในสัปดาห์หน้า. (The doctor makes an appointment for the patient to follow up symptoms next week.)',
			synonym: ['กำหนดเวลา (to schedule)'],
			antonym: ['ยกเลิกนัด (to cancel appointment)'],
		},
		{
			word: 'เยี่ยม',
			translation: 'to visit',
			pronunciation: 'YEEAM',
			example:
				'พวกเราเดินทางไปเยี่ยมญาติผู้ใหญ่ที่ต่างจังหวัด. (We traveled to visit our senior relatives upcountry.)',
			synonym: ['เยือน (to pay a visit)'],
			antonym: [],
		},
		{
			word: 'ล้อเลียน',
			translation: 'to mimic',
			pronunciation: 'lor-LEEAN',
			example:
				"อย่าพูดจาล้อเลียนสำเนียงของคนอื่นแบบนั้น. (Do not speak mimicking someone else's accent like that.)",
			synonym: ['เลียนแบบ (to imitate)'],
			antonym: [],
		},
		{
			word: 'ขัดจังหวะ',
			translation: 'to interrupt',
			pronunciation: 'khat-jang-WA',
			example:
				'เขาไม่ควรพูดแทรกขัดจังหวะระหว่างคนอื่นกำลังประชุม. (He should not speak up to interrupt while others are meeting.)',
			synonym: ['สอดแทรก (to intrude)'],
			antonym: [],
		},
		{
			word: 'ห้าม',
			translation: 'to forbid',
			pronunciation: 'HAAM',
			example:
				'ป้ายติดประกาศห้ามสูบบุหรี่ในบริเวณโรงพยาบาล. (The posted sign forbids smoking inside the hospital area.)',
			synonym: ['สกัดกั้น (to bar)'],
			antonym: ['อนุญาต (to allow)'],
		},
		{
			word: 'นินทา',
			translation: 'to gossip',
			pronunciation: 'nin-THAA',
			example:
				"คนที่มีมารยาทย่อมไม่นำเรื่องผู้อื่นไปนินทาลับหลัง. (Well-mannered people naturally do not take others' affairs to gossip behind backs.)",
			synonym: ['ว่าร้าย (to slander)'],
			antonym: ['สรรเสริญ (to praise)'],
		},
		{
			word: 'ขยาย',
			translation: 'to expand',
			pronunciation: 'kha-YAAI',
			example:
				'เทศบาลวางแผนขยายช่องจราจรเพื่อลดปัญหารถติด. (The municipality plans to expand traffic lanes to curb road congestion.)',
			synonym: ['แผ่กว้าง (to broaden)'],
			antonym: ['หดตัว (to shrink)'],
		},
		{
			word: 'เน่า',
			translation: 'to rot',
			pronunciation: 'NAO',
			example:
				'ผลไม้ที่วางทิ้งไว้กลางแดดนานเริ่มส่งกลิ่นเน่าเสีย. (Fruit left out in the sun for long starts rotting and smelling bad.)',
			synonym: ['เปื่อยสลาย (to decompose)'],
			antonym: ['สดใหม่ (to stay fresh)'],
		},
		{
			word: 'ละลาย',
			translation: 'to melt',
			pronunciation: 'la-LAAI',
			example:
				'ก้อนน้ำแข็งในแก้วเริ่มละลายอย่างรวดเร็วเพราะอากาศร้อน. (Ice cubes inside the glass begin to melt rapidly due to heat.)',
			synonym: ['หลอมเหลว (to liquefy)'],
			antonym: ['แข็งตัว (to freeze)'],
		},
		{
			word: 'แข็งตัว',
			translation: 'to freeze',
			pronunciation: 'khaeng-DUA',
			example:
				'น้ำในช่องแช่แข็งเย็นจัดจนเปลี่ยนสภาพแข็งตัวเป็นน้ำแข็ง. (Water in the deep freezer got so chilled it froze into ice.)',
			synonym: ['จับตัวแข็ง (to solidify)'],
			antonym: ['ละลาย (to melt)'],
		},
		{
			word: 'ระเบิด',
			translation: 'to explode',
			pronunciation: 'ra-BOET',
			example:
				'ถังก๊าซเก่าระเบิดเสียงดังสนั่นหวั่นไหวกลางโรงงาน. (An old gas canister exploded with a deafening noise inside the plant.)',
			synonym: ['แตกกระจาย (to burst)'],
			antonym: [],
		},
		{
			word: 'สะท้อน',
			translation: 'to reflect',
			pronunciation: 'sa-THAWN',
			example:
				'ผิวน้ำนิ่งสะท้อนเงาของดวงจันทร์ยามค่ำคืนได้อย่างชัดเจน. (Calm water surfaces reflect shadows of the night moon clearly.)',
			synonym: ['ส่องสะท้อน (to cast reflection)'],
			antonym: [],
		},
		{
			word: 'ลอย',
			translation: 'to float',
			pronunciation: 'LOY',
			example:
				'กระทงใบตองลอยไปตามกระแสน้ำในแม่น้ำอย่างช้าๆ. (Banana leaf floats drift slowly along currents in the river.)',
			synonym: ['ล่องลอย (to drift)'],
			antonym: ['จม (to sink)'],
		},
		{
			word: 'จม',
			translation: 'to sink',
			pronunciation: 'JOM',
			example:
				'ก้อนหินหนักจมดิ่งลงสู่ก้นบ่อน้ำลึกทันที. (The heavy stone sank right down to the deep pond bottom instantly.)',
			synonym: ['ดิ่งลง (to plunge)'],
			antonym: ['ลอย (to float)'],
		},
		{
			word: 'ไหล',
			translation: 'to flow',
			pronunciation: 'LAI',
			example:
				'น้ำตกใสไหลลงมาจากหน้าผาสูงสู่ลำธารด้านล่าง. (Clear waterfall flows down from high cliffs into lower streams.)',
			synonym: ['รินหลั่ง (to stream)'],
			antonym: ['หยุดนิ่ง (to stagnate)'],
		},
		{
			word: 'ไหม้',
			translation: 'to burn',
			pronunciation: 'MAI',
			example:
				'ขนมปังในเตาอบร้อนเกินไปจนไหม้ดำเกรียม. (Bread inside the baking oven got overheated and burned pitch black.)',
			synonym: ['ลุกไหม้ (to blaze)'],
			antonym: ['มอดดับ (to extinguish)'],
		},
		{
			word: 'ดม',
			translation: 'to smell',
			pronunciation: 'DOM',
			example:
				'เด็กหญิงก้มลงดมกลิ่นหอมของดอกมะลิสีขาว. (The young girl leaned down to smell the scent of white jasmine.)',
			synonym: ['สูดดม (to sniff)'],
			antonym: [],
		},
		{
			word: 'ชิม',
			translation: 'to taste',
			pronunciation: 'CHIM',
			example:
				'พ่อครัวใช้ช้อนชิมรสชาติน้ำซุปก่อนยกเสิร์ฟลูกค้า. (The chef uses a spoon to taste soup flavors before serving guests.)',
			synonym: ['ลิ้มลอง (to savor)'],
			antonym: [],
		},
		{
			word: 'จ้อง',
			translation: 'to stare',
			pronunciation: 'JAWNG',
			example:
				'แมวจ้องมองจิ้งจกบนผนังห้องโดยไม่กะพริบตา. (The cat stares at a wall gecko without blinking an eye.)',
			synonym: ['เพ่งมอง (to gaze intently)'],
			antonym: ['ละสายตา (to look away)'],
		},
		{
			word: 'หายใจ',
			translation: 'to breathe',
			pronunciation: 'haai-JAI',
			example:
				'เราควรสูดลมหายใจเข้าลึกๆ เพื่อผ่อนคลายความเครียด. (We should breathe deeply inward to relieve stress.)',
			synonym: ['สูดลมปราณ (to inhale)'],
			antonym: [],
		},
		{
			word: 'ไอ',
			translation: 'to cough',
			pronunciation: 'AI',
			example:
				'คนป่วยมีอาการไอแห้งติดต่อกันหลายวันเพราะเป็นหวัด. (The patient suffered from dry cough consecutively for days from a cold.)',
			synonym: ['กระแอม (to clear throat)'],
			antonym: [],
		},
		{
			word: 'จาม',
			translation: 'to sneeze',
			pronunciation: 'JAAM',
			example:
				'เขาแพ้ละอองเกสรดอกไม้จนจามออกมาเสียงดัง. (He had pollen allergies until he sneezed loudly.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'หาว',
			translation: 'to yawn',
			pronunciation: 'HAAO',
			example:
				'นักเรียนเริ่มง่วงนอนจนเผลอหาวระหว่างฟังบรรยาย. (The student grew sleepy and accidentally yawned during lecture.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เคลิ้ม',
			translation: 'to doze',
			pronunciation: 'KLOEM',
			example:
				'เขานั่งเคลิ้มหลับไปบนเก้าอี้โยกเพราะความอ่อนเพลีย. (He sat dozing off on the rocking chair out of exhaustion.)',
			synonym: ['สัปหงก (to nod off)'],
			antonym: ['ตื่นตัว (to stay alert)'],
		},
		{
			word: 'สั่น',
			translation: 'to shake',
			pronunciation: 'SAN',
			example:
				'ลูกสุนัขตัวน้อยยืนตัวสั่นด้วยความหนาวเหน็บท่ามกลางสายฝน. (The tiny puppy stood shaking with bitter chill in the rain.)',
			synonym: ['ไหวระริก (to quiver)'],
			antonym: ['นิ่งสงบ (to stand motionless)'],
		},
		{
			word: 'เหงื่อออก',
			translation: 'to sweat',
			pronunciation: 'nguea-OK',
			example:
				'นักวิ่งมีเหงื่อออกท่วมตัวหลังจากวิ่งเข้าเส้นชัย. (The runner sweated profusely all over after crossing the finish line.)',
			synonym: ['หลั่งเหงื่อ (to perspire)'],
			antonym: [],
		},
		{
			word: 'ชนะ',
			translation: 'to win',
			pronunciation: 'cha-NA',
			example:
				'ทีมโรงเรียนของเราสามารถเอาชนะการแข่งขันฟุตบอลประจำปีได้สำเร็จ. (Our school team managed to win the annual soccer championship.)',
			synonym: ['กำชัย (to triumph)'],
			antonym: ['แพ้ (to lose)'],
		},
		{
			word: 'แข่ง',
			translation: 'to compete',
			pronunciation: 'KHAENG',
			example:
				'นักกีฬาเยาวชนลงสนามร่วมแข่งว่ายน้ำเพื่อชิงเหรียญทอง. (Youth athletes entered the pool to compete in swimming for gold medals.)',
			synonym: ['ประลอง (to contest)'],
			antonym: [],
		},
		{
			word: 'ฝึก',
			translation: 'to practice',
			pronunciation: 'FEUK',
			example:
				'เด็กชายขยันฝึกเล่นเปียโนทุกวันหลังเลิกเรียน. (The boy diligently practices playing piano every day after classes.)',
			synonym: ['ฝึกซ้อม (to drill)'],
			antonym: [],
		},
		{
			word: 'สอน',
			translation: 'to teach',
			pronunciation: 'SAWN',
			example:
				'ครูตั้งใจสอนวิชาคณิตศาสตร์ให้นักเรียนเข้าใจง่าย. (The teacher determinedly teaches mathematics for students to easily grasp.)',
			synonym: ['สั่งสอน (to instruct)'],
			antonym: ['เรียนรู้ (to learn)'],
		},
		{
			word: 'สอบ',
			translation: 'to take an exam',
			pronunciation: 'SAWP',
			example:
				'นักเรียนกำลังนั่งสอบปลายภาคอย่างเงียบสงบในห้องเรียน. (Students are sitting taking final exams quietly in the classroom.)',
			synonym: ['ทำข้อสอบ (to sit a test)'],
			antonym: [],
		},
		{
			word: 'สมัคร',
			translation: 'to apply',
			pronunciation: 'sa-MAK',
			example:
				'บัณฑิตใหม่ยื่นเอกสารเพื่อสมัครงานที่บริษัทข้ามชาติ. (The fresh graduate submitted documents to apply for jobs at a multinational firm.)',
			synonym: ['ยื่นคำร้อง (to file application)'],
			antonym: [],
		},
		{
			word: 'ควบคุม',
			translation: 'to control',
			pronunciation: 'khuap-KHOOM',
			example:
				'กัปตันบังคับควบคุมเครื่องบินให้ลงจอดอย่างปลอดภัย. (The pilot handled controls to land the airplane securely.)',
			synonym: ['กำกับดูแล (to govern)'],
			antonym: ['ปล่อยปละละเลย (to neglect)'],
		},
		{
			word: 'สะสม',
			translation: 'to collect',
			pronunciation: 'sa-SOM',
			example:
				'คุณตาชอบสะสมแสตมป์โบราณจากทั่วทุกมุมโลก. (Grandfather likes collecting antique stamps from all corners of the world.)',
			synonym: ['รวบรวม (to accumulate)'],
			antonym: ['จับจ่าย (to disperse)'],
		},
		{
			word: 'แลกเปลี่ยน',
			translation: 'to exchange',
			pronunciation: 'laek-PLEEAN',
			example:
				'นักท่องเที่ยวแวะแลกเปลี่ยนเงินตราต่างประเทศที่เคาน์เตอร์ธนาคาร. (Tourists stop by to exchange foreign currencies at bank counters.)',
			synonym: ['สับเปลี่ยน (to swap)'],
			antonym: [],
		},
		{
			word: 'ประดิษฐ์',
			translation: 'to invent',
			pronunciation: 'pra-DIT',
			example:
				'นักวิทยาศาสตร์คิดค้นประดิษฐ์เครื่องกรองน้ำพลังงานแสงอาทิตย์. (Scientists invented solar-powered water purifiers.)',
			synonym: ['คิดค้น (to innovate)'],
			antonym: [],
		},
		{
			word: 'ปลูก',
			translation: 'to plant',
			pronunciation: 'PLOOK',
			example:
				'ชาวสวนช่วยกันปลูกต้นส้มในแปลงดินหลังบ้าน. (The gardeners helped each other plant orange trees in the backyard plot.)',
			synonym: ['เพาะปลูก (to cultivate)'],
			antonym: ['ถอน (to uproot)'],
		},
		{
			word: 'ซ่อนรูป',
			translation: 'to conceal form',
			pronunciation: 'sawn-ROOP',
			example:
				'เขาใส่เสื้อตัวใหญ่เพื่อซ่อนรูปทรงที่แท้จริง. (He wears an oversized shirt to conceal his actual build.)',
			synonym: ['พรางตัว (to camouflage)'],
			antonym: [],
		},
		{
			word: 'จอด',
			translation: 'to park',
			pronunciation: 'JAWT',
			example:
				'พ่อจอดรถยนต์ส่วนตัวไว้ในช่องจอดใต้ร่มไม้. (Father parked the private car in the parking slot under the tree shade.)',
			synonym: ['เทียบ (to dock)'],
			antonym: ['ออกรถ (to drive away)'],
		},
		{
			word: 'สวม',
			translation: 'to wear',
			pronunciation: 'SUAM',
			example:
				'ทุกคนควรสวมหน้ากากอนามัยเมื่อเข้าไปในที่แออัด. (Everyone should wear a sanitary mask when entering crowded places.)',
			synonym: ['ใส่ (to put on)'],
			antonym: ['ถอด (to take off)'],
		},
		{
			word: 'ถอด',
			translation: 'to take off',
			pronunciation: 'THAWT',
			example:
				'กรุณาถอดรองเท้าไว้บนชั้นวางก่อนเดินเข้าห้องพระ. (Please take off shoes onto the rack before walking into the prayer room.)',
			synonym: ['ปลด (to unfasten)'],
			antonym: ['สวม (to put on)'],
		},
		{
			word: 'ส่งยิ้ม',
			translation: 'to smile at',
			pronunciation: 'song-YIM',
			example:
				'คุณยายใจดีส่งยิ้มให้เด็กๆ ที่เดินผ่านหน้าบ้าน. (The kind grandmother smiled at the children walking past the house.)',
			synonym: ['ยิ้มแย้ม (to beam)'],
			antonym: ['บึ้งตึง (to scowl)'],
		},
		{
			word: 'พยักหน้า',
			translation: 'to nod',
			pronunciation: 'pha-yak-NAA',
			example:
				'เขาพยักหน้าตอบรับเมื่อเข้าใจข้อตกลงในการทำงาน. (He nodded in agreement upon understanding the work agreement.)',
			synonym: ['ขานรับ (to signal approval)'],
			antonym: ['ส่ายหน้า (to shake head)'],
		},
		{
			word: 'ส่ายหน้า',
			translation: 'to shake head',
			pronunciation: 'saai-NAA',
			example:
				'น้องสาวส่ายหน้าปฏิเสธเมื่อแม่ถามว่าอยากกินยาไหม. (Little sister shook her head refusing when mother asked if she wanted medicine.)',
			synonym: ['ปฏิเสธ (to decline)'],
			antonym: ['พยักหน้า (to nod)'],
		},
		{
			word: 'ชักชวน',
			translation: 'to invite',
			pronunciation: 'chak-CHUAN',
			example:
				'เพื่อนๆ ชักชวนกันไปปั่นจักรยานออกกำลังกายตอนเย็น. (Friends invited each other to ride bicycles for evening exercise.)',
			synonym: ['ชวน (to persuade)'],
			antonym: ['ห้ามปราม (to dissuade)'],
		},
		{
			word: 'ปรึกษา',
			translation: 'to consult',
			pronunciation: 'preuk-SAA',
			example:
				'นักเรียนเข้าพบครูประจำชั้นเพื่อปรึกษาเรื่องแผนการเรียน. (The student met the homeroom teacher to consult on study plans.)',
			synonym: ['ขอคำแนะนำ (to seek advice)'],
			antonym: [],
		},
		{
			word: 'ต้อนรับ',
			translation: 'to welcome',
			pronunciation: 'dtaawn-RAP',
			example:
				'พนักงานโรงแรมยืนต้อนรับแขกผู้มาเยือนด้วยความอบอุ่น. (Hotel staff stood welcoming visiting guests with warmth.)',
			synonym: ['รับรอง (to host)'],
			antonym: ['ขับไล่ (to expel)'],
		},
		{
			word: 'ข้ามแดน',
			translation: 'to cross border',
			pronunciation: 'khaam-DAEN',
			example:
				'กลุ่มนักท่องเที่ยวต้องแสดงหนังสือเดินทางก่อนข้ามแดน. (The tourist group must present passports before crossing borders.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กวักมือ',
			translation: 'to wave hand',
			pronunciation: 'gwak-MEU',
			example:
				'แม่ค้ากวักมือเรียกให้ลูกค้าเข้ามาดูสินค้าหน้าร้าน. (The vendor waved her hand calling customers to browse storefront goods.)',
			synonym: ['โบกมือ (to wave)'],
			antonym: [],
		},
		{
			word: 'ชื่นชม',
			translation: 'to admire',
			pronunciation: 'cheun-CHOM',
			example:
				'อาจารย์ชื่นชมผลงานภาพวาดสีน้ำของนักเรียนทุกคน. (The teacher admires the watercolor painting work of every student.)',
			synonym: ['ยกย่อง (to praise)'],
			antonym: ['ตำหนิ (to criticize)'],
		},
		{
			word: 'ต่อเติม',
			translation: 'to extend',
			pronunciation: 'dtor-DTOEM',
			example:
				'เจ้าของบ้านจ้างช่างมาต่อเติมระเบียงไม้หลังบ้านใหม่. (The homeowner hired carpenters to extend a new wooden back porch.)',
			synonym: ['ขยาย (to enlarge)'],
			antonym: ['รื้อถอน (to demolish)'],
		},
	],
	nouns: [
		{
			word: 'เวลา',
			translation: 'time',
			pronunciation: 'wee-LAA',
			example:
				'ฉันไม่มีเวลาว่างมากพอสำหรับการไปเที่ยวต่างจังหวัด. (I do not have enough free time for traveling upcountry.)',
			synonym: ['คราว (occasion)'],
			antonym: [],
		},
		{
			word: 'ปี',
			translation: 'year',
			pronunciation: 'BPEE',
			example:
				'เขาทำงานเก็บเงินอยู่ที่นี่มานานกว่าสามปีแล้ว. (He has been working and saving money here for over three years.)',
			synonym: ['ขวบปี (annual span)'],
			antonym: [],
		},
		{
			word: 'วัน',
			translation: 'day',
			pronunciation: 'WAN',
			example:
				'วันนี้เป็นวันที่อากาศแจ่มใสและแดดส่องสว่างทั่วท้องฟ้า. (Today is a sunny day with bright light beaming across skies.)',
			synonym: ['ทิวา (daytime)'],
			antonym: ['คืน (night)'],
		},
		{
			word: 'ครั้ง',
			translation: 'time',
			pronunciation: 'KHRANG',
			example:
				'นี่เป็นครั้งแรกที่ฉันได้ลองชิมอาหารพื้นเมืองจานนี้. (This is the first time I have tasted this regional dish.)',
			synonym: ['หน (turn/instance)'],
			antonym: [],
		},
		{
			word: 'คน',
			translation: 'person',
			pronunciation: 'KHON',
			example:
				'มีคนยืนรอเข้าคิวซื้อตั๋วรถไฟยาวเหยียดหน้าสถานี. (There are persons standing in long queues buying train tickets outside stations.)',
			synonym: ['มนุษย์ (human being)'],
			antonym: [],
		},
		{
			word: 'ผู้ชาย',
			translation: 'man',
			pronunciation: 'phoo-CHAAI',
			example:
				'ผู้ชายในชุดสูทสีดำเดินเข้ามาทักทายแขกในงานเลี้ยง. (The man in a black suit walked in to greet guests at the banquet.)',
			synonym: ['บุรุษ (gentleman)'],
			antonym: ['ผู้หญิง (woman)'],
		},
		{
			word: 'ผู้หญิง',
			translation: 'woman',
			pronunciation: 'phoo-YING',
			example:
				'ผู้หญิงสวมเสื้อสีแดงนั่งอ่านหนังสืออยู่ตรงมุมห้อง. (The woman wearing a red blouse sits reading books at the room corner.)',
			synonym: ['สตรี (lady)'],
			antonym: ['ผู้ชาย (man)'],
		},
		{
			word: 'สิ่งของ',
			translation: 'thing',
			pronunciation: 'sing-KHAWNG',
			example:
				'อย่าวางสิ่งของมีค่าทิ้งไว้ในรถโดยไม่มีคนดูแล. (Do not leave valuable things inside cars unattended by anyone.)',
			synonym: ['พัสดุ (object/item)'],
			antonym: [],
		},
		{
			word: 'กรณี',
			translation: 'case',
			pronunciation: 'ga-ra-NEE',
			example:
				'ในกรณีฉุกเฉินให้ใช้บันไดหนีไฟแทนลิฟต์โดยสารทันที. (In case of emergencies, use fire escape staircases instead of lifts at once.)',
			synonym: ['เหตุการณ์ (incident)'],
			antonym: [],
		},
		{
			word: 'ประเทศ',
			translation: 'country',
			pronunciation: 'pra-THEET',
			example:
				'ประเทศไทยมีสถานที่ท่องเที่ยวทางธรรมชาติที่สวยงามมากมาย. (Thailand has abundant beautiful natural tourist attractions.)',
			synonym: ['บ้านเมือง (nation)'],
			antonym: [],
		},
		{
			word: 'ช่วงเวลา',
			translation: 'moment',
			pronunciation: 'chuang-wee-LAA',
			example:
				'ช่วงเวลานี้เป็นจังหวะที่เหมาะสมสำหรับการเริ่มต้นทำธุรกิจ. (This moment serves as a suitable window for launching business ventures.)',
			synonym: ['ระยะเวลา (duration)'],
			antonym: [],
		},
		{
			word: 'รูปแบบ',
			translation: 'pattern',
			pronunciation: 'roop-BAEP',
			example:
				'สถาปนิกออกแบบอาคารด้วยรูปแบบสถาปัตยกรรมร่วมสมัย. (The architect designed the edifice following contemporary architectural patterns.)',
			synonym: ['ลักษณะ (structure)'],
			antonym: [],
		},
		{
			word: 'ส่วน',
			translation: 'part',
			pronunciation: 'SUAN',
			example:
				'นักเรียนแบ่งขนมออกเป็นสี่ส่วนเท่าๆ กันเพื่อแจกเพื่อน. (The student divides the snack into four equal parts to share with friends.)',
			synonym: ['ชิ้นส่วน (portion/fragment)'],
			antonym: ['ทั้งหมด (entirety)'],
		},
		{
			word: 'ชีวิต',
			translation: 'life',
			pronunciation: 'chee-WIT',
			example:
				'การใช้ชีวิตอย่างเรียบง่ายทำให้เขามีความสงบสุขทางใจ. (Living a simple life gives him profound internal peace.)',
			synonym: ['ชีวา (existence)'],
			antonym: ['ความตาย (death)'],
		},
		{
			word: 'งาน',
			translation: 'work',
			pronunciation: 'NGAAN',
			example:
				'เขามีงานค้างต้องสะสางให้เสร็จก่อนวันหยุดสุดสัปดาห์นี้. (He has pending work that must get sorted out before this weekend.)',
			synonym: ['หน้าที่การงาน (occupation)'],
			antonym: [],
		},
		{
			word: 'จุด',
			translation: 'point',
			pronunciation: 'JOOT',
			example:
				'ป้ายเตือนระบุว่าเป็นจุดอันตรายที่มีอุบัติเหตุบ่อยครั้ง. (The sign indicates that it is a hazardous point prone to frequent accidents.)',
			synonym: ['ตำแหน่ง (location/spot)'],
			antonym: [],
		},
		{
			word: 'มือ',
			translation: 'hand',
			pronunciation: 'MEU',
			example:
				'เด็กๆ ล้างมือด้วยสบู่ทุกครั้งก่อนเริ่มรับประทานอาหาร. (Children wash hands with soap every time before eating food.)',
			synonym: ['หัตถ์ (hand formal)'],
			antonym: [],
		},
		{
			word: 'ผู้คน',
			translation: 'people',
			pronunciation: 'phoo-KHON',
			example:
				'ผู้คนมากมายต่างพากันออกมาเดินจับจ่ายซื้อของที่ตลาดนัด. (A crowd of people came out to browse and shop at the flea market.)',
			synonym: ['มวลชน (masses)'],
			antonym: [],
		},
		{
			word: 'ชั่วโมง',
			translation: 'hour',
			pronunciation: 'chua-MONG',
			example:
				'การเดินทางโดยรถไฟใช้เวลาประมาณสองชั่วโมงถึงจุดหมาย. (Travel by train takes about two hours to reach destinations.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'จุดจบ',
			translation: 'end',
			pronunciation: 'joot-JOP',
			example:
				'นิทานเรื่องนี้มีจุดจบที่เปี่ยมไปด้วยรอยยิ้มและความสุข. (This tale meets an end brimming with smiles and gladness.)',
			synonym: ['อวสาน (finale)'],
			antonym: ['จุดเริ่มต้น (beginning)'],
		},
		{
			word: 'ประเภท',
			translation: 'type',
			pronunciation: 'pra-PHEET',
			example:
				'ร้านนี้จำหน่ายเครื่องเขียนหลากหลายประเภทสำหรับนักเรียน. (This shop retails multiple types of stationery for students.)',
			synonym: ['หมวดหมู่ (category)'],
			antonym: [],
		},
		{
			word: 'ตัวอย่าง',
			translation: 'example',
			pronunciation: 'dtua-YAANG',
			example:
				'ครูยกตัวอย่างโจทย์เลขง่ายๆ เพื่อให้นักเรียนเข้าใจหลักการ. (The teacher gives an easy math example so students grasp fundamentals.)',
			synonym: ['แม่แบบ (specimen/model)'],
			antonym: [],
		},
		{
			word: 'ด้าน',
			translation: 'side',
			pronunciation: 'DAAN',
			example:
				'บ้านหลังนี้มีสวนหย่อมร่มรื่นอยู่ทางด้านทิศตะวันออก. (This house features a breezy garden patch situated on the east side.)',
			synonym: ['ข้าง (flank)'],
			antonym: [],
		},
		{
			word: 'ปัญหา',
			translation: 'problem',
			pronunciation: 'bpan-HAA',
			example:
				'ทุกคนช่วยกันระดมความคิดเพื่อหาทางคลี่คลายปัญหาเรื่องน้ำท่วม. (Everyone brainstorms together to resolve flooding problems.)',
			synonym: ['อุปสรรค (obstacle)'],
			antonym: ['ทางออก (solution)'],
		},
		{
			word: 'บัญชี',
			translation: 'account',
			pronunciation: 'ban-CHEE',
			example:
				'เขาเปิดบัญชีเงินฝากประจำเล่มใหม่กับธนาคารใกล้บ้าน. (He opened a new fixed deposit account at a branch near home.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เด็กผู้ชาย',
			translation: 'boy',
			pronunciation: 'dek-phoo-CHAAI',
			example:
				'เด็กผู้ชายตัวเล็กกำลังวิ่งไล่ตามลูกฟุตบอลอย่างสนุกสนาน. (The little boy is running after the soccer ball excitedly.)',
			synonym: [],
			antonym: ['เด็กผู้หญิง (girl)'],
		},
		{
			word: 'เด็กผู้หญิง',
			translation: 'girl',
			pronunciation: 'dek-phoo-YING',
			example:
				'เด็กผู้หญิงคนนั้นถือช่อดอกกุหลาบสีชมพูเดินเข้ามาในห้อง. (That girl carried a bouquet of pink roses walking into the room.)',
			synonym: [],
			antonym: ['เด็กผู้ชาย (boy)'],
		},
		{
			word: 'ข้อเท็จจริง',
			translation: 'fact',
			pronunciation: 'khaw-thet-JING',
			example:
				'รายงานชิ้นนี้สรุปข้อเท็จจริงจากการสำรวจตลาดอย่างเป็นกลาง. (This paper sums up facts from market surveys objectively.)',
			synonym: ['ความจริง (truth)'],
			antonym: ['เรื่องแต่ง (fiction)'],
		},
		{
			word: 'ชื่อ',
			translation: 'name',
			pronunciation: 'CHEU',
			example:
				'โปรดเขียนชื่อและนามสกุลด้วยตัวบรรจงบนใบสมัคร. (Please write your first name and last name neatly on application forms.)',
			synonym: ['นาม (designation)'],
			antonym: [],
		},
		{
			word: 'เพื่อนผู้ชาย',
			translation: 'male friend',
			pronunciation: 'pheuan-phoo-CHAAI',
			example:
				'เพื่อนผู้ชายของฉันอาสาช่วยยกของหนักขึ้นท้ายรถบรรทุก. (My male friend volunteered to help lift heavy luggage onto truck beds.)',
			synonym: [],
			antonym: ['เพื่อนผู้หญิง (female friend)'],
		},
		{
			word: 'เพื่อนผู้หญิง',
			translation: 'female friend',
			pronunciation: 'pheuan-phoo-YING',
			example:
				'เธอชวนเพื่อนผู้หญิงไปเดินซื้อเสื้อผ้าใหม่ที่ศูนย์การค้า. (She invited a female friend to go shop for clothes at the mall.)',
			synonym: [],
			antonym: ['เพื่อนผู้ชาย (male friend)'],
		},
		{
			word: 'สิทธิ / กฎหมาย',
			translation: 'right or law',
			pronunciation: 'sit-thi-got-MAAI',
			example:
				'ประชาชนทุกคนย่อมได้รับการคุ้มครองภายใต้สิทธิ / กฎหมาย. (All citizens naturally receive protection under equal rights and laws.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เมือง',
			translation: 'city',
			pronunciation: 'MEUANG',
			example:
				'เมืองนี้มีระบบขนส่งสาธารณะที่สะดวกรวดเร็วและสะอาด. (This city possesses public transport links that run fast and clean.)',
			synonym: ['นคร (metropolis)'],
			antonym: ['ชนบท (countryside)'],
		},
		{
			word: 'น้ำ',
			translation: 'water',
			pronunciation: 'NAM',
			example:
				'เราควรดื่มน้ำสะอาดบริสุทธิ์วันละหลายแก้วเพื่อสุขภาพ. (We ought to drink pure water glasses daily for good health.)',
			synonym: ['วารี (water formal)'],
			antonym: [],
		},
		{
			word: 'คืน',
			translation: 'night',
			pronunciation: 'KHEUN',
			example:
				'คืนนี้ท้องฟ้าโปร่งใสจนมองเห็นแสงดาวส่องประกายระยิบระยับ. (Tonight the skies are cloudless, revealing sparkling stars clearly.)',
			synonym: ['ราตรี (nighttime)'],
			antonym: ['วัน (day)'],
		},
		{
			word: 'รถ',
			translation: 'car',
			pronunciation: 'ROT',
			example:
				'พ่อล้างทำความสะอาดรถคันใหม่ในโรงจอดรถทุกวันเสาร์. (Father washes the new car clean inside the garage every Saturday.)',
			synonym: ['ยานพาหนะ (vehicle)'],
			antonym: [],
		},
		{
			word: 'ถนน',
			translation: 'street',
			pronunciation: 'tha-NON',
			example:
				'มีร้านค้าและแผงลอยเปิดขายของเรียงรายอยู่สองข้างถนน. (Shops and retail stalls open lined along both sides of streets.)',
			synonym: ['เส้นทาง (roadway)'],
			antonym: [],
		},
		{
			word: 'ครอบครัว',
			translation: 'family',
			pronunciation: 'khrawp-KHRUA',
			example:
				'สมาชิกทุกคนในครอบครัวร่วมรับประทานอาหารเย็นพร้อมหน้ากัน. (All members in the family eat dinner gatherings side by side.)',
			synonym: ['ครัวเรือน (household)'],
			antonym: [],
		},
		{
			word: 'เรื่องราว',
			translation: 'story',
			pronunciation: 'reuang-RAAO',
			example:
				'คุณปู่เล่าเรื่องราวชีวิตในอดีตให้หลานๆ ฟังอย่างสนุกสนาน. (Grandfather recounts old stories of youth to grandchildren delightfully.)',
			synonym: ['นิทาน (tale)'],
			antonym: [],
		},
		{
			word: 'พ่อ',
			translation: 'father',
			pronunciation: 'PHAW',
			example:
				'พ่อสอนลูกชายให้หัดขี่จักรยานสองล้อในสวนสาธารณะ. (Father teaches his son to ride two-wheeled bikes at the public park.)',
			synonym: ['บิดา (father formal)'],
			antonym: ['แม่ (mother)'],
		},
		{
			word: 'แม่',
			translation: 'mother',
			pronunciation: 'MAE',
			example:
				'แม่ตื่นแต่เช้ามาเตรียมข้าวกล่องแสนอร่อยให้ลูกไปโรงเรียน. (Mother wakes up early preparing delicious lunch boxes for school.)',
			synonym: ['มารดา (mother formal)'],
			antonym: ['พ่อ (father)'],
		},
		{
			word: 'พี่ชาย',
			translation: 'older brother',
			pronunciation: 'phee-CHAAI',
			example:
				'พี่ชายช่วยน้องทำการบ้านวิชาคณิตศาสตร์ที่โต๊ะเขียนหนังสือ. (Older brother tutors siblings with math exercises at desks.)',
			synonym: [],
			antonym: ['น้องชาย (younger brother)'],
		},
		{
			word: 'พี่สาว',
			translation: 'older sister',
			pronunciation: 'phee-SAAO',
			example:
				'พี่สาวกำลังเลือกซื้อของขวัญวันเกิดชิ้นพิเศษให้น้องสาวคนเล็ก. (Older sister is browsing special birthday gifts for little sisters.)',
			synonym: [],
			antonym: ['น้องสาว (younger sister)'],
		},
		{
			word: 'ลูกชาย',
			translation: 'son',
			pronunciation: 'look-CHAAI',
			example:
				'ลูกชายของเขาสอบผ่านและเข้าเรียนต่อมหาวิทยาลัยได้สำเร็จ. (His son passed the entrance exam and enrolled into university.)',
			synonym: ['บุตรชาย (male offspring)'],
			antonym: ['ลูกสาว (daughter)'],
		},
		{
			word: 'ลูกสาว',
			translation: 'daughter',
			pronunciation: 'look-SAAO',
			example:
				'ลูกสาวฝึกซ้อมเปียโนอย่างตั้งใจเพื่อเตรียมขึ้นแสดงบนเวที. (The daughter trains hard on the piano preparing stage recitals.)',
			synonym: ['บุตรสาว (female offspring)'],
			antonym: ['ลูกชาย (son)'],
		},
		{
			word: 'เงิน',
			translation: 'money',
			pronunciation: 'NGOEN',
			example:
				'เขาทำงานหนักเพื่อเก็บออมเงินไว้ใช้จ่ายในยามจำเป็น. (He works laboriously saving spare money set aside for emergencies.)',
			synonym: ['สตางค์ (funds/cash)'],
			antonym: [],
		},
		{
			word: 'ร่างกาย',
			translation: 'body',
			pronunciation: 'raang-GAAI',
			example:
				'การออกกำลังกายสม่ำเสมอช่วยเสริมสร้างให้ร่างกายแข็งแรง. (Consistent physical exercise builds bodily conditioning and health.)',
			synonym: ['กายา (physique)'],
			antonym: ['จิตใจ (mind)'],
		},
		{
			word: 'กลุ่ม',
			translation: 'group',
			pronunciation: 'GLOOM',
			example:
				'นักเรียนแบ่งกลุ่มกันทำรายงานค้นคว้าเรื่องสิ่งแวดล้อม. (Students form small study groups working on environmental topics.)',
			synonym: ['หมวด (band/cluster)'],
			antonym: ['เดี่ยว (individual)'],
		},
		{
			word: 'ความสัมพันธ์',
			translation: 'relationship',
			pronunciation: 'khwaam-sam-PHAN',
			example:
				'การสื่อสารที่ดีช่วยส่งเสริมความสัมพันธ์อันอบอุ่นในครอบครัว. (Good mutual communication cultivates warm relationships within homes.)',
			synonym: ['ความผูกพัน (bond)'],
			antonym: [],
		},
		{
			word: 'พลัง',
			translation: 'energy',
			pronunciation: 'pha-LANG',
			example:
				'อาหารเช้าที่มีประโยชน์ช่วยเติมเต็มพลังสำหรับการทำงานตลอดวัน. (Wholesome nutritious breakfast replenishes bodily energies for work.)',
			synonym: ['กำลัง (strength)'],
			antonym: ['ความอ่อนล้า (exhaustion)'],
		},
		{
			word: 'วินาที',
			translation: 'second',
			pronunciation: 'wi-naa-THEE',
			example:
				'เขาวิ่งผ่านเข้าเส้นชัยได้ก่อนคู่แข่งเพียงเสี้ยววินาที. (He crossed finishing ribbons ahead of rivals by a fraction of a second.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เดือน',
			translation: 'month',
			pronunciation: 'DEUAN',
			example:
				'ครอบครัวของเราวางแผนจะไปเที่ยวทะเลในเดือนหน้า. (Our family mapped out itineraries to visit oceans next month.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'สัปดาห์',
			translation: 'week',
			pronunciation: 'sap-DAA',
			example:
				'เขาไปออกกำลังกายที่ฟิตเนสสามครั้งต่อสัปดาห์. (He visits fitness centers for exercise workouts thrice a week.)',
			synonym: ['อาทิตย์ (week colloquial)'],
			antonym: [],
		},
		{
			word: 'ตอนเช้า',
			translation: 'morning',
			pronunciation: 'dtaawn-CHAAO',
			example:
				'อากาศสดชื่นในตอนเช้าเหมาะกับการเดินเล่นสูดลมบริสุทธิ์. (Fresh air in the morning is ideal for strolling and inhaling pure breezes.)',
			synonym: ['ยามเช้า (dawn/morning)'],
			antonym: ['ตอนค่ำ (evening)'],
		},
		{
			word: 'ตอนบ่าย',
			translation: 'afternoon',
			pronunciation: 'dtaawn-BAAI',
			example:
				'ฉันชอบนั่งจิบชาร้อนและอ่านหนังสือเงียบๆ ในตอนบ่าย. (I enjoy sipping hot brewed tea reading quietly in the afternoon.)',
			synonym: [],
			antonym: ['ตอนเช้า (morning)'],
		},
		{
			word: 'ทุ่งนา',
			translation: 'rice field',
			pronunciation: 'thoong-NAA',
			example:
				'ต้นข้าวในทุ่งนาเริ่มออกรวงสีเขียวขจีทอดยาวสุดสายตา. (Rice stalks in paddies are turning lush green across horizons.)',
			synonym: ['ท้องทุ่ง (plains)'],
			antonym: [],
		},
		{
			word: 'โต๊ะ',
			translation: 'table',
			pronunciation: 'DTO',
			example:
				'แม่วางแจกันดอกไม้สดไว้ตรงกลางโต๊ะรับประทานอาหาร. (Mother set a fresh flower vase down right at dining room tables.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ประตู',
			translation: 'door',
			pronunciation: 'bpra-DTOO',
			example:
				'อย่าลืมปิดล็อคประตูหน้าบ้านให้เรียบร้อยก่อนเข้านอน. (Do not forget to lock front entry doors tightly before retiring.)',
			synonym: ['ทวาร (portal)'],
			antonym: [],
		},
		{
			word: 'หน้าต่าง',
			translation: 'window',
			pronunciation: 'naa-DTAANG',
			example:
				'ลมเย็นพัดผ่านเข้ามาทางหน้าต่างห้องนอนที่เปิดกว้าง. (Cool breezes draft inward through open bedroom windows.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เก้าอี้',
			translation: 'chair',
			pronunciation: 'gao-EE',
			example:
				'เขาลากเก้าอี้ไม้มานั่งพักเหนื่อยใต้ร่มเงาของต้นไม้ใหญ่. (He dragged wooden chairs under shady big branches to rest.)',
			synonym: ['ม้านั่ง (bench/seat)'],
			antonym: [],
		},
		{
			word: 'เนื้อ',
			translation: 'meat',
			pronunciation: 'NEUA',
			example:
				'พ่อครัวเลือกซื้อเนื้อวัวสดคุณภาพดีมาทำสเต๊กมื้อค่ำ. (The chef purchases fine fresh beef cuts for dinner steaks.)',
			synonym: ['เนื้อสัตว์ (flesh)'],
			antonym: [],
		},
		{
			word: 'ปลา',
			translation: 'fish',
			pronunciation: 'BPLAA',
			example:
				'ฝูงปลาตัวเล็กแหวกว่ายอย่างอิสระในลำธารใสแจ๋ว. (A school of small fish swims freely in the clear stream.)',
			synonym: ['มัจฉา (fish poetic)'],
			antonym: [],
		},
		{
			word: 'ผลไม้',
			translation: 'fruit',
			pronunciation: 'phon-la-MAAI',
			example:
				'แม่ซื้อผลไม้สดตามฤดูกาลหลายอย่างมาจากตลาดนัด. (Mom bought various fresh seasonal fruits from the market.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ผัก',
			translation: 'vegetable',
			pronunciation: 'PHAK',
			example:
				'การรับประทานผักใบเขียวเป็นประจำมีประโยชน์ต่อสุขภาพ. (Eating green leafy vegetables regularly is beneficial for health.)',
			synonym: ['พืชผัก (greens)'],
			antonym: [],
		},
		{
			word: 'ขนมปัง',
			translation: 'bread',
			pronunciation: 'kha-nom-BPANG',
			example:
				'เขาทาเนยสดลงบนขนมปังปิ้งร้อนๆ สำหรับมื้อเช้า. (He spreads fresh butter on hot toasted bread for breakfast.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'น้ำตาล',
			translation: 'sugar',
			pronunciation: 'nam-DTAAN',
			example:
				'อย่าเติมน้ำตาลในกาแฟมากเกินไปเพราะจะหวานเกิน. (Do not add too much sugar to the coffee because it will be overly sweet.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เกลือ',
			translation: 'salt',
			pronunciation: 'GLUEA',
			example:
				'แม่ครัวเหยาะเกลือป่นเล็กน้อยลงในหม้อแกงจืด. (The cook adds a pinch of fine salt into the soup pot.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ไวน์',
			translation: 'wine',
			pronunciation: 'WAI',
			example:
				'พนักงานเสิร์ฟรินไวน์แดงชั้นดีลงในแก้วทรงสูง. (The waiter pours fine red wine into the tall glass.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กาแฟ',
			translation: 'coffee',
			pronunciation: 'gaa-FAAE',
			example:
				'กลิ่นหอมกรุ่นของกาแฟคั่วบดลอยฟุ้งไปทั่วทั้งห้อง. (The fragrant aroma of roasted coffee fills the entire room.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ชา',
			translation: 'tea',
			pronunciation: 'CHAA',
			example:
				'คุณยายชอบดื่มชาร้อนใบเตยหลังจากรับประทานอาหาร. (Grandmother likes drinking hot pandan tea after meals.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'นม',
			translation: 'milk',
			pronunciation: 'NOM',
			example:
				'เด็กวัยกำลังโตควรดื่มนมโคสดรสจืดทุกวัน. (Growing children should drink fresh plain cow milk every day.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ช็อกโกแลต',
			translation: 'chocolate',
			pronunciation: 'chok-gaw-LAAT',
			example:
				'น้องสาวเก็บช็อกโกแลตแท่งโปรดไว้ในตู้เย็น. (Little sister keeps her favorite chocolate bar in the refrigerator.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ดนตรี',
			translation: 'music',
			pronunciation: 'don-DTRII',
			example:
				'เสียงดนตรีคลาสสิกเบาๆ ช่วยให้จิตใจสงบผ่อนคลาย. (Soft classical music helps calm and relax the mind.)',
			synonym: ['เสียงเพลง (musical tune)'],
			antonym: [],
		},
		{
			word: 'เพลง',
			translation: 'song',
			pronunciation: 'PHLEENG',
			example:
				'วิทยุกำลังเปิดเพลงสากลยอดนิยมที่กำลังติดชาร์ต. (The radio is playing a popular hit song on the charts.)',
			synonym: ['บทเพลง (composed song)'],
			antonym: [],
		},
		{
			word: 'หนังสือ',
			translation: 'book',
			pronunciation: 'nang-SUE',
			example:
				'เขายืมหนังสือประวัติศาสตร์เล่มหนามาจากห้องสมุดประชาชน. (He borrowed a thick history book from the public library.)',
			synonym: ['ตำรา (textbook)'],
			antonym: [],
		},
		{
			word: 'นิตยสาร',
			translation: 'magazine',
			pronunciation: 'nit-ta-yaa-SAAN',
			example:
				'ลูกค้าเปิดอ่านนิตยสารแฟชั่นระหว่างนั่งรอคิวในร้านตัดผม. (The customer flips through a fashion magazine while waiting at the barbershop.)',
			synonym: ['วารสาร (periodical)'],
			antonym: [],
		},
		{
			word: 'หนังสือพิมพ์',
			translation: 'newspaper',
			pronunciation: 'nang-sue-PHIM',
			example:
				'คุณพ่อกางหนังสือพิมพ์ฉบับเช้าออกอ่านคู่กับกาแฟ. (Father spreads out the morning newspaper to read along with coffee.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ภาพยนตร์',
			translation: 'movie',
			pronunciation: 'phaap-pha-YON',
			example:
				'ครอบครัวของเราไปชมภาพยนตร์เรื่องใหม่ที่โรงหนังใกล้บ้าน. (Our family went to watch a new movie at the nearby cinema.)',
			synonym: ['หนัง (movie informal)'],
			antonym: [],
		},
		{
			word: 'ซีรีส์',
			translation: 'series',
			pronunciation: 'see-REE',
			example:
				'เธอชอบดูซีรีส์เกาหลีจนดึกดื่นในคืนวันหยุดสุดสัปดาห์. (She likes binge-watching Korean series late into weekend nights.)',
			synonym: ['ละครชุด (drama serial)'],
			antonym: [],
		},
		{
			word: 'กีฬา',
			translation: 'sport',
			pronunciation: 'gii-LAA',
			example:
				'การเล่นกีฬาแบดมินตันช่วยเสริมสร้างความว่องไวของร่างกาย. (Playing badminton sports helps enhance bodily agility.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เกม',
			translation: 'game',
			pronunciation: 'GEEM',
			example:
				'เด็กๆ รวมตัวกันเล่นเกมกระดานอย่างสนุกสนานบนโต๊ะไม้. (The kids gathered to play board games merrily on the wooden table.)',
			synonym: ['การละเล่น (playful match)'],
			antonym: [],
		},
		{
			word: 'การเดินทาง',
			translation: 'trip',
			pronunciation: 'gaan-doen-THAANG',
			example:
				'การเดินทางข้ามจังหวัดในช่วงเทศกาลต้องเผื่อเวลาล่วงหน้า. (Travel trips across provinces during festivals require budgeting time in advance.)',
			synonym: ['การสัญจร (commuting)'],
			antonym: [],
		},
		{
			word: 'โรงแรม',
			translation: 'hotel',
			pronunciation: 'roong-RAEM',
			example:
				'นักท่องเที่ยวจองห้องพักในโรงแรมหรูริมชายหาดล่วงหน้า. (Tourists booked guest rooms in a luxury beachfront hotel ahead of time.)',
			synonym: ['ที่พัก (lodging)'],
			antonym: [],
		},
		{
			word: 'เตียง',
			translation: 'bed',
			pronunciation: 'DTEEANG',
			example:
				'เขาล้มตัวลงนอนบนเตียงนุ่มทันทีที่ถึงบ้านด้วยความเหนื่อยล้า. (He collapsed onto the soft bed upon reaching home out of exhaustion.)',
			synonym: ['ที่นอน (mattress)'],
			antonym: [],
		},
		{
			word: 'ห้องน้ำ',
			translation: 'bathroom',
			pronunciation: 'hawng-NAM',
			example:
				'แม่บ้านทำความสะอาดกระเบื้องและอ่างล้างมือในห้องน้ำจนเอี่ยม. (The housekeeper scrubbed tiles and sinks in the bathroom until spotless.)',
			synonym: ['สุขา (restroom)'],
			antonym: [],
		},
		{
			word: 'ฝักบัว',
			translation: 'shower',
			pronunciation: 'fak-BUA',
			example:
				'น้ำอุ่นจากฝักบัวช่วยคลายกล้ามเนื้อหลังออกกำลังกายหนัก. (Warm water from the shower head helps loosen muscles after heavy workouts.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เสื้อผ้า',
			translation: 'clothes',
			pronunciation: 'suea-PHAA',
			example:
				'เธอซักและตากเสื้อผ้าหลากสีไว้บนราวระเบียงหลังบ้าน. (She washed and hung colorful clothes on the backyard balcony rack.)',
			synonym: ['เครื่องแต่งกาย (attire)'],
			antonym: [],
		},
		{
			word: 'รองเท้า',
			translation: 'shoe',
			pronunciation: 'rawng-THAAO',
			example:
				'นักวิ่งสวมรองเท้ากีฬาคู่ใหม่ลงฝึกซ้อมในสนามลู่ปูน. (The runner wore a new pair of athletic shoes to train on the concrete track.)',
			synonym: ['เกือก (shoe archaic)'],
			antonym: [],
		},
		{
			word: 'หมวก',
			translation: 'hat',
			pronunciation: 'MUAK',
			example:
				'ชาวสวนสวมหมวกปีกกว้างเพื่อกันแสงแดดแผดเผาตอนเที่ยงวัน. (The farmer wears a wide-brimmed hat to shield against the scorching noon sun.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'นาฬิกา',
			translation: 'clock',
			pronunciation: 'naa-li-GAA',
			example:
				'เสียงเข็มนาฬิกาแขวนผนังเดินบอกเวลาอย่างสม่ำเสมอในห้องเงียบ. (The wall clock tick-tock movement reliably marks the time in the quiet room.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กล่อง',
			translation: 'box',
			pronunciation: 'GLAWNG',
			example:
				'พนักงานบรรจุสินค้าลงในกล่องกระดาษลูกฟูกอย่างแน่นหนา. (The clerk packed products securely into corrugated cardboard boxes.)',
			synonym: ['ลัง (crate)'],
			antonym: [],
		},
		{
			word: 'ถุง',
			translation: 'bag',
			pronunciation: 'THOONG',
			example:
				'ลูกค้าหิ้วถุงผ้าใส่ผักสดและผลไม้กลับมาจากซูเปอร์มาร์เก็ต. (The shopper carried cloth bags containing fresh produce back from the grocery.)',
			synonym: ['ย่าม (shoulder pouch)'],
			antonym: [],
		},
		{
			word: 'โทรศัพท์',
			translation: 'telephone',
			pronunciation: 'thoo-ra-SAP',
			example:
				'เสียงสัญญาณโทรศัพท์ตั้งโต๊ะดังขึ้นหลายครั้งแต่ไม่มีใครรับสาย. (The desk telephone rang several times but nobody answered the call.)',
			synonym: ['มือถือ (mobile cell)'],
			antonym: [],
		},
		{
			word: 'คอมพิวเตอร์',
			translation: 'computer',
			pronunciation: 'khawm-phiu-DTOE',
			example:
				'วิศวกรเปิดหน้าจอคอมพิวเตอร์เพื่อเขียนแบบโครงสร้างตึกสูง. (The engineer opened computer screens to draft high-rise building blueprints.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แสง',
			translation: 'light',
			pronunciation: 'SAENG',
			example:
				'แสงแดดยามเช้าส่องลอดผ่านม่านหน้าต่างเข้ามาในห้องนอน. (Morning sunlight beams through window drapes into the bedroom.)',
			synonym: ['ประกาย (ray/glow)'],
			antonym: ['ความมืด (darkness)'],
		},
		{
			word: 'เงา',
			translation: 'shadow',
			pronunciation: 'NGAO',
			example:
				'ต้นไม้ใหญ่ทอดเงาร่มรื่นปกคลุมลานหน้าบ้านอย่างสบายตา. (The large tree casts refreshing shadows shielding the front yard soothingly.)',
			synonym: ['ร่มเงา (shade)'],
			antonym: ['แสงสว่าง (illumination)'],
		},
		{
			word: 'สี',
			translation: 'color',
			pronunciation: 'SEE',
			example:
				'ช่างทาสีผสมสีน้ำมันเฉดใหม่เพื่อทารั้วหน้าบ้าน. (The painter blends a new shade of oil color paint for the front fence.)',
			synonym: ['เฉดสี (tint/hue)'],
			antonym: [],
		},
		{
			word: 'บ้าน',
			translation: 'house',
			pronunciation: 'BAAN',
			example:
				'ทุกคนช่วยกันทำความสะอาดและจัดเก็บข้าวของในบ้านให้น่าอยู่. (Everyone helps tidy and organize things to make the house cozy.)',
			synonym: ['เรือน (dwelling)'],
			antonym: [],
		},
		{
			word: 'โรงเรียน',
			translation: 'school',
			pronunciation: 'roong-REEAN',
			example:
				'นักเรียนยืนเข้าแถวเคารพธงชาติหน้าเสาธงในบริเวณโรงเรียน. (Pupils queue facing the flagstaff in the schoolyard for the anthem.)',
			synonym: ['สถานศึกษา (academy)'],
			antonym: [],
		},
		{
			word: 'โรงพยาบาล',
			translation: 'hospital',
			pronunciation: 'roong-pha-yaa-BAAN',
			example:
				'รถพยาบาลเปิดไซเรนนำผู้ป่วยส่งถึงโรงพยาบาลอย่างเร่งด่วน. (The ambulance sirens wail rushing patients swiftly to the hospital.)',
			synonym: ['สถานพยาบาล (clinic/sanatorium)'],
			antonym: [],
		},
		{
			word: 'ร้านอาหาร',
			translation: 'restaurant',
			pronunciation: 'raan-aa-HAAN',
			example:
				'ร้านอาหารริมคลองแห่งนี้ขึ้นชื่อเรื่องต้มยำกุ้งรสจัดจ้าน. (This canal-side restaurant is renowned for spicy and sour shrimp soup.)',
			synonym: ['ภัตตาคาร (dining parlor)'],
			antonym: [],
		},
		{
			word: 'ทะเล',
			translation: 'sea',
			pronunciation: 'tha-LEE',
			example:
				'คลื่นทะเลซัดสาดเข้าหาแนวโขดหินริมชายหาดอย่างต่อเนื่อง. (Sea waves lap continuously against coastal rock formations on the beach.)',
			synonym: ['สมุทร (oceanic deep)'],
			antonym: [],
		},
		{
			word: 'ภูเขา',
			translation: 'mountain',
			pronunciation: 'phoo-KHAO',
			example:
				'ยอดภูเขาสูงตระหง่านถูกปกคลุมด้วยทะเลหมอกสีขาวบริสุทธิ์. (The towering mountain peak is shrouded by a pure white sea of mist.)',
			synonym: ['ดอย (high ridge)'],
			antonym: ['ที่ราบ (flat plain)'],
		},
		{
			word: 'แม่น้ำ',
			translation: 'river',
			pronunciation: 'mae-NAM',
			example:
				'เรือบรรทุกสินค้าแล่นล่องไปตามแม่น้ำสายสำคัญของประเทศ. (Cargo vessels glide along the major transportation river of the country.)',
			synonym: ['สายน้ำ (waterway)'],
			antonym: [],
		},
		{
			word: 'ท้องฟ้า',
			translation: 'sky',
			pronunciation: 'thawng-FAA',
			example:
				'ท้องฟ้าแจ่มใสไร้เมฆหมอกบดบังในวันที่อากาศปลอดโปร่ง. (The sky is crystal clear with no overcast clouds on a fair-weather day.)',
			synonym: ['นภา (firmament)'],
			antonym: ['ผืนดิน (earth ground)'],
		},
		{
			word: 'พระอาทิตย์',
			translation: 'sun',
			pronunciation: 'phra-aa-THIT',
			example:
				'พระอาทิตย์ค่อยๆ โผล่พ้นขอบฟ้าสาดแสงอบอุ่นทั่วทุ่งนา. (The sun gradually rises above the horizon, casting warmth over the fields.)',
			synonym: ['ดวงตะวัน (sun solar)'],
			antonym: ['พระจันทร์ (moon)'],
		},
		{
			word: 'พระจันทร์',
			translation: 'moon',
			pronunciation: 'phra-JAN',
			example:
				'แสงนวลตาจากพระจันทร์เต็มดวงส่องสว่างนำทางในค่ำคืนมืดมิด. (The mellow glow of the full moon lights the path in the dark night.)',
			synonym: ['ดวงเดือน (lunar orb)'],
			antonym: ['พระอาทิตย์ (sun)'],
		},
		{
			word: 'ดาว',
			translation: 'star',
			pronunciation: 'DAAO',
			example:
				'บนท้องฟ้ายามค่ำคืนมีประกายแสงระยิบระยับของดาวนับล้านดวง. (In the night sky twinkle the sparkling lights of millions of stars.)',
			synonym: ['ดวงดารา (celestial star)'],
			antonym: [],
		},
		{
			word: 'ฝน',
			translation: 'rain',
			pronunciation: 'FON',
			example:
				'เม็ดฝนโปรยปรายลงมาทำให้ต้นไม้ใบหญ้าในสวนชุ่มฉ่ำ. (Rain drops sprinkle down, dampening garden foliage and plants freshly.)',
			synonym: ['พิรุณ (rain poetic)'],
			antonym: ['ความแห้งแล้ง (drought)'],
		},
		{
			word: 'ลม',
			translation: 'wind',
			pronunciation: 'LOM',
			example:
				'สายลมพัดโบกกิ่งไผ่ลู่ไหวไปตามจังหวะในยามบ่ายแก่ๆ. (The breeze blows, swaying bamboo stems to rhythmic paces in the late afternoon.)',
			synonym: ['วาโย (air gust)'],
			antonym: [],
		},
		{
			word: 'ดอกไม้',
			translation: 'flower',
			pronunciation: 'dawk-MAAI',
			example:
				'ผึ้งบินว่อนตอมเกสรดอกไม้หลากสีสันในสวนสาธารณะ. (Bees buzz hovering around colorful flower stamens in public parks.)',
			synonym: ['บุปผา (floral bloom)'],
			antonym: [],
		},
		{
			word: 'ต้นไม้',
			translation: 'tree',
			pronunciation: 'dton-MAAI',
			example:
				'นกทำรังอยู่บนกิ่งก้านที่แข็งแรงของต้นไม้ใหญ่ข้างบ้าน. (Birds build nests on sturdy branches of the large tree beside the house.)',
			synonym: ['พฤกษา (arboreal plant)'],
			antonym: [],
		},
		{
			word: 'หมา',
			translation: 'dog',
			pronunciation: 'MAA',
			example:
				'หมาส่งเสียงเห่าเตือนเมื่อมีคนแปลกหน้าเดินผ่านหน้าประตูรั้ว. (The dog barks alertly when a stranger passes the front gate.)',
			synonym: ['สุนัข (canine polite)'],
			antonym: [],
		},
		{
			word: 'แมว',
			translation: 'cat',
			pronunciation: 'MAAEO',
			example:
				'แมวนอนขดตัวรับความอบอุ่นจากแสงแดดริมระเบียงบ้าน. (The cat curls up basking in the warm sunshine on the house veranda.)',
			synonym: ['วิฬาร์ (feline literary)'],
			antonym: [],
		},
		{
			word: 'นก',
			translation: 'bird',
			pronunciation: 'NOK',
			example:
				'ฝูงนกส่งเสียงร้องเจื้อยแจ้วขณะบินออกจากรังในตอนเช้าตรู่. (A flock of birds chirps cheerfully while flying out of their nests at dawn.)',
			synonym: ['ปักษี (feathered fowl)'],
			antonym: [],
		},
		{
			word: 'หัว',
			translation: 'head',
			pronunciation: 'HUA',
			example:
				'เขาใส่หมวกกันน็อกเพื่อปกป้องศีรษะและหัวขณะขี่จักรยานยนต์. (He straps on a helmet to protect his cranium and head while cycling.)',
			synonym: ['ศีรษะ (head formal)'],
			antonym: ['เท้า (foot)'],
		},
		{
			word: 'หน้า',
			translation: 'face',
			pronunciation: 'NAA',
			example:
				'เขาล้างหน้าด้วยน้ำสะอาดเย็นๆ เพื่อเรียกความสดชื่นยามเช้า. (He washes his face with cool fresh water to feel refreshed at dawn.)',
			synonym: ['ใบหน้า (visage)'],
			antonym: [],
		},
		{
			word: 'ตา',
			translation: 'eye',
			pronunciation: 'DTAA',
			example:
				'การจ้องหน้าจอคอมพิวเตอร์นานเกินไปทำให้ปวดเมื่อยตา. (Staring at computer screens for too long causes eye strain.)',
			synonym: ['ดวงตา (eyeball)'],
			antonym: [],
		},
		{
			word: 'หู',
			translation: 'ear',
			pronunciation: 'HOO',
			example:
				'เขาสวมหูฟังครอบหูทั้งสองข้างเพื่อฟังเพลงบรรเลงโปรด. (He wears over-ear headphones over both ears listening to music.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'จมูก',
			translation: 'nose',
			pronunciation: 'ja-MOOK',
			example:
				'เด็กน้อยใช้ผ้าเช็ดหน้าซับหยดน้ำมูกที่ไหลออกจากรูจมูก. (The toddler dabs a handkerchief on drops running out of the nose.)',
			synonym: ['นาสิก (nasal organ)'],
			antonym: [],
		},
		{
			word: 'ปาก',
			translation: 'mouth',
			pronunciation: 'BPAAK',
			example:
				'เขาใช้กระดาษเช็ดคราบเศษอาหารที่มุมปากหลังรับประทานเสร็จ. (He used a napkin to wipe food crumbs at the mouth corner after dining.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ขา',
			translation: 'leg',
			pronunciation: 'KHAA',
			example:
				'นักวิ่งรู้สึกตึงกล้ามเนื้อขาหลังจากวิ่งมาราธอนระยะไกล. (The runner felt stiff leg muscles after running the long marathon.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เท้า',
			translation: 'foot',
			pronunciation: 'THAAO',
			example:
				'เขาล้างเศษทรายที่เกาะติดเท้าก่อนเดินก้าวขึ้นบนระเบียงบ้าน. (He rinsed sandy residues sticking to feet before stepping onto the porch.)',
			synonym: ['บาทา (foot formal)'],
			antonym: ['หัว (head)'],
		},
		{
			word: 'หัวใจ',
			translation: 'heart',
			pronunciation: 'hua-JAI',
			example:
				'การออกกำลังกายแบบคาร์ดิโอช่วยบริหารกล้ามเนื้อหัวใจให้แข็งแรง. (Cardiovascular exercise workouts help condition heart muscles sturdily.)',
			synonym: ['ดวงใจ (core pump)'],
			antonym: [],
		},
		{
			word: 'สมอง',
			translation: 'brain',
			pronunciation: 'sa-MAWNG',
			example:
				'การอ่านหนังสือและการพักผ่อนที่เพียงพอช่วยบำรุงระบบสมอง. (Reading books and getting adequate rest nurture brain function.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ความรัก',
			translation: 'love',
			pronunciation: 'khwaam-RAK',
			example:
				'ความรักและความเข้าใจในครอบครัวเป็นเกราะคุ้มกันจิตใจที่ดีที่สุด. (Love and mutual understanding within families form the best shield.)',
			synonym: ['ความเสน่หา (affection)'],
			antonym: ['ความเกลียดชัง (hatred)'],
		},
		{
			word: 'ความสุข',
			translation: 'happiness',
			pronunciation: 'khwaam-SOOK',
			example:
				"รอยยิ้มของเด็กๆ เติมเต็มความสุขให้แก่ทุกคนในบ้านอย่างแท้จริง. (Children's smiles truly fill everyone in the house with happiness.)",
			synonym: ['ความเบิกบาน (joyfulness)'],
			antonym: ['ความทุกข์ (sorrow)'],
		},
		{
			word: 'อากาศ',
			translation: 'weather',
			pronunciation: 'aa-GAAT',
			example:
				"อากาศวันนี้เย็นสบายและมีลมพัดเอื่อยๆ ตลอดทั้งวัน. (Today's weather is pleasantly cool with gentle breezes blowing all day.)",
			synonym: ['ดินฟ้าอากาศ (climate)'],
			antonym: [],
		},
		{
			word: 'อาหาร',
			translation: 'food',
			pronunciation: 'aa-HAAN',
			example:
				'แม่ครัวปรุงอาหารรสชาติกลมกล่อมและถูกหลักอนามัยทุกมื้อ. (The cook prepares palatable and hygienic food for every meal.)',
			synonym: ['กับข้าว (cooked meal)'],
			antonym: [],
		},
		{
			word: 'ข้าว',
			translation: 'rice',
			pronunciation: 'KHAAO',
			example:
				'ชาวนาเกี่ยวข้าวหอมมะลิสีทองอร่ามเต็มทุ่งนาในฤดูเก็บเกี่ยว. (Farmers harvest golden jasmine rice spanning paddies in harvest season.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ไข่',
			translation: 'egg',
			pronunciation: 'KHAI',
			example:
				'เขาตอกไข่ไก่ใส่ลงในกระทะร้อนฉ่าเพื่อทำไข่ดาวกรอบๆ. (He cracked a fresh hen egg into the sizzling pan to make a fried egg.)',
			synonym: ['ฟองไข่ (egg sphere)'],
			antonym: [],
		},
		{
			word: 'กุญแจ',
			translation: 'key',
			pronunciation: 'goon-JAAE',
			example:
				'เขากำพวงกุญแจไว้ในมือแน่นก่อนเสียบไขปลดล็อคประตูรั้ว. (He held the key ring tightly before inserting it to unlock the gate.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กระเป๋า',
			translation: 'bag',
			pronunciation: 'gra-BPAO',
			example:
				'นักเรียนสะพายกระเป๋าใส่หนังสือเล่มหนักเดินเข้าประตูโรงเรียน. (The pupil slung a bag loaded with heavy books entering school gates.)',
			synonym: ['ย่าม (satchel)'],
			antonym: [],
		},
		{
			word: 'ปากกา',
			translation: 'pen',
			pronunciation: 'bpaak-GAA',
			example:
				'คุณครูใช้ปากกาสีแดงตรวจและให้คะแนนการบ้านของนักเรียน. (The schoolteacher uses a red ink pen to check and grade student homework.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ดินสอ',
			translation: 'pencil',
			pronunciation: 'din-SAW',
			example:
				'จิตรกรเหลาดินสอไม้จนแหลมคมเพื่อใช้ร่างโครงสร้างภาพวาด. (The artist sharpens the wood pencil sharply to sketch drawing outlines.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กระดาษ',
			translation: 'paper',
			pronunciation: 'gra-DAAT',
			example:
				'เขาจดบันทึกข้อความสำคัญลงบนแผ่นกระดาษสีขาวสะอาดตา. (He jotted down key notes upon sheets of spotless white paper.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แผนที่',
			translation: 'map',
			pronunciation: 'phaaen-THEE',
			example:
				'นักท่องเที่ยวกางแผนที่เมืองออกดูเพื่อหาทางเดินไปสถานีรถไฟ. (The tourist folded out the city map to locate trails to the train station.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'รูปภาพ',
			translation: 'picture',
			pronunciation: 'roop-PHAAP',
			example:
				'ครอบครัวแขวนรูปภาพถ่ายรวมสมาชิกทุกคนไว้บนผนังห้องรับแขก. (The family framed and mounted group pictures on parlor walls.)',
			synonym: ['ภาพถ่าย (photograph)'],
			antonym: [],
		},
		{
			word: 'กล้อง',
			translation: 'camera',
			pronunciation: 'GLAWNG',
			example:
				'ช่างภาพหยิบกล้องถ่ายรูปตัวโปรดขึ้นมาบันทึกภาพทิวทัศน์ริมทะเล. (The photographer picked up his prized camera documenting seascape views.)',
			synonym: ['กล้องถ่ายรูป (camera device)'],
			antonym: [],
		},
		{
			word: 'เครื่องบิน',
			translation: 'airplane',
			pronunciation: 'khreuang-BIN',
			example:
				'เครื่องบินโดยสารลำใหญ่ทะยานขึ้นสู่น่านฟ้าอย่างนุ่มนวลและปลอดภัย. (The large commercial airplane ascended into airspace smoothly and safely.)',
			synonym: ['อากาศยาน (aircraft)'],
			antonym: [],
		},
		{
			word: 'จักรยาน',
			translation: 'bicycle',
			pronunciation: 'jak-gra-YAAN',
			example:
				'เด็กๆ ปั่นจักรยานสองล้อคันเล็กเล่นรอบสวนสาธารณะในตอนเย็น. (Kids pedal two-wheeled bicycles around municipal parks at dusk.)',
			synonym: ['สองล้อ (two-wheeler)'],
			antonym: [],
		},
		{
			word: 'เรือ',
			translation: 'boat',
			pronunciation: 'REUA',
			example:
				'ชาวประมงพายเรือหาปลาลำเล็กเทียบเข้าหาฝั่งตอนเช้ามืด. (The fisherman rows the small boat docking ashore at the crack of dawn.)',
			synonym: ['นาวา (vessel formal)'],
			antonym: [],
		},
		{
			word: 'หมู่บ้าน',
			translation: 'village',
			pronunciation: 'moo-BAAN',
			example:
				'หมู่บ้านชนบทแห่งนี้ล้อมรอบไปด้วยขุนเขาเขียวชอุ่มและลำธารใส. (This rural countryside village is surrounded by verdant hills and clear brooks.)',
			synonym: ['ชุมชน (settlement)'],
			antonym: ['ตัวเมือง (downtown)'],
		},
		{
			word: 'สนามบิน',
			translation: 'airport',
			pronunciation: 'sa-naam-BIN',
			example:
				'ผู้โดยสารนั่งรอขึ้นเครื่องอยู่ภายในโถงผู้โดยสารของสนามบิน. (Passengers sat waiting boarding calls inside airport terminal lounges.)',
			synonym: ['ท่าอากาศยาน (airfield)'],
			antonym: [],
		},
		{
			word: 'ธนาคาร',
			translation: 'bank',
			pronunciation: 'tha-naa-KHAAN',
			example:
				'พนักงานบริษัทเดินไปทำธุรกรรมฝากเงินสดที่เคาน์เตอร์ธนาคาร. (The office worker walked over to deposit currency sums at bank desks.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ตู้เย็น',
			translation: 'refrigerator',
			pronunciation: 'dtoo-YEN',
			example:
				'แม่นำผักสดและผลไม้แช่เก็บไว้ในช่องเก็บความเย็นของตู้เย็น. (Mom stores farm vegetables and fruits inside cold refrigerator drawers.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กระจก',
			translation: 'mirror',
			pronunciation: 'gra-JOK',
			example:
				'เธอยืนจัดแต่งทรงผมและตรวจดูความเรียบร้อยหน้าบานกระจกเงา. (She stood fixing hair locks and checking appearances in front of mirrors.)',
			synonym: ['กระจกเงา (looking-glass)'],
			antonym: [],
		},
		{
			word: 'ห้องครัว',
			translation: 'kitchen',
			pronunciation: 'hawng-KHRUA',
			example:
				'แม่กำลังยืนอบขนมปังหอมกรุ่นอยู่ภายในห้องครัว. (Mother is standing baking aromatic bread inside the kitchen.)',
			synonym: ['ครัว (cookhouse)'],
			antonym: [],
		},
		{
			word: 'ห้องนอน',
			translation: 'bedroom',
			pronunciation: 'hawng-NAWN',
			example:
				'เขาเปิดหน้าต่างห้องนอนเพื่อระบายอากาศในตอนเช้า. (He opened the bedroom window to ventilate air in the morning.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'สวนสาธารณะ',
			translation: 'public park',
			pronunciation: 'suan-saa-thaa-ra-na',
			example:
				'ผู้คนพากันมาวิ่งออกกำลังกายในสวนสาธารณะยามเย็น. (People gather to jog for exercise in the public park at dusk.)',
			synonym: ['ลานพักผ่อน (recreation ground)'],
			antonym: [],
		},
		{
			word: 'ตลาด',
			translation: 'market',
			pronunciation: 'dta-LAAT',
			example:
				'ชาวบ้านเดินไปซื้อปลาสดและพืชผักที่ตลาดเช้าตรู่. (Villagers walk to buy fresh fish and vegetables at the early morning market.)',
			synonym: ['ตลาดสด (fresh market)'],
			antonym: [],
		},
		{
			word: 'จาน',
			translation: 'plate',
			pronunciation: 'JAAN',
			example:
				'พนักงานยกจานข้าวผัดร้อนๆ มาเสิร์ฟบนโต๊ะอาหาร. (The waiter brought hot plates of fried rice to serve on the dining table.)',
			synonym: ['ภาชนะ (dishware)'],
			antonym: [],
		},
		{
			word: 'ช้อน',
			translation: 'spoon',
			pronunciation: 'CHAWN',
			example:
				'เขาหยิบช้อนสแตนเลสคันใหม่ขึ้นมาตักน้ำซุปอุ่นๆ. (He picked up a new stainless steel spoon to scoop warm soup.)',
			synonym: [],
			antonym: ['ส้อม (fork)'],
		},
		{
			word: 'ส้อม',
			translation: 'fork',
			pronunciation: 'SAWM',
			example:
				'จัดวางมีดและส้อมไว้ข้างจานอย่างถูกต้องตามมารยาท. (Place knives and forks beside plates properly according to etiquette.)',
			synonym: [],
			antonym: ['ช้อน (spoon)'],
		},
		{
			word: 'แก้ว',
			translation: 'glass',
			pronunciation: 'GAAEO',
			example:
				'รินน้ำส้มคั้นสดใส่ลงในแก้วใสเย็นฉ่ำสำหรับมื้อเช้า. (Pour freshly squeezed orange juice into a chilled transparent glass for breakfast.)',
			synonym: ['ถ้วยแก้ว (tumbler)'],
			antonym: [],
		},
		{
			word: 'กำแพง',
			translation: 'wall',
			pronunciation: 'gam-PHAENG',
			example:
				'มีต้นไม้เลื้อยสีเขียวเกาะปกคลุมตามแนวกำแพงอิฐเก่า. (Green climbing plants latch covering along the old brick wall line.)',
			synonym: ['ผนัง (partition wall)'],
			antonym: [],
		},
		{
			word: 'บันได',
			translation: 'stairs',
			pronunciation: 'ban-DAI',
			example:
				'คนแก่ค่อยๆ ก้าวเดินขึ้นบันไดบ้านอย่างระมัดระวัง. (The elderly person stepped slowly up the house stairs carefully.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'สะพาน',
			translation: 'bridge',
			pronunciation: 'sa-PHAAN',
			example:
				'รถยนต์แล่นข้ามสะพานคอนกรีตขนาดใหญ่ข้ามแม่น้ำเจ้าพระยา. (Cars drove crossing the large concrete bridge over the Chao Phraya River.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ร่ม',
			translation: 'umbrella',
			pronunciation: 'ROM',
			example:
				'อย่าลืมพกร่มพับคันเล็กติดกระเป๋าเป้ไว้ในวันฝนตก. (Do not forget to pack a small folding umbrella in your backpack on rainy days.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ผ้าห่ม',
			translation: 'blanket',
			pronunciation: 'phaa-HOM',
			example:
				'เด็กน้อยดึงผ้าห่มผืนหนาขึ้นมาคลุมตัวเพื่อคลายหนาว. (The child pulled up the thick blanket to cover up against the cold.)',
			synonym: ['ผ้าคลุม (quilt)'],
			antonym: [],
		},
		{
			word: 'พัดลม',
			translation: 'electric fan',
			pronunciation: 'phat-LOM',
			example:
				'เปิดพัดลมส่ายเบาๆ เพื่อช่วยให้อากาศในห้องถ่ายเท. (Turn on the electric fan oscillating gently to help air circulate in the room.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'หลอดไฟ',
			translation: 'light bulb',
			pronunciation: 'lawt-FAI',
			example:
				'ช่างไฟฟ้าปีนขึ้นไปเปลี่ยนหลอดไฟดวงใหม่ที่ระเบียง. (The electrician climbed up to replace a new light bulb on the balcony.)',
			synonym: ['ดวงไฟ (lamp)'],
			antonym: [],
		},
	],
	adjectives: [
		{
			word: 'ดี',
			translation: 'good',
			pronunciation: 'DEE',
			example:
				'เขาเป็นคนมีน้ำใจดีและคอยให้ความช่วยเหลือผู้อื่นอยู่เสมอ. (He is a kind-hearted good person who consistently assists others.)',
			synonym: ['ยอดเยี่ยม (excellent)'],
			antonym: ['เลว (evil)'],
		},
		{
			word: 'ไม่ดี',
			translation: 'bad',
			pronunciation: 'mai-DEE',
			example:
				'การนอนดึกเป็นประจำส่งผลเสียไม่ดีต่อสุขภาพร่างกายระยะยาว. (Staying up late systematically brings bad side-effects to bodily health.)',
			synonym: ['แย่ (poor)'],
			antonym: ['ดี (good)'],
		},
		{
			word: 'ใหญ่',
			translation: 'big',
			pronunciation: 'YAI',
			example:
				'บ้านหลังใหญ่ริมแม่น้ำมีสวนหย่อมกว้างขวางและร่มรื่นมาก. (The big house beside the river has an expansive, shady lawn.)',
			synonym: ['โต (large)'],
			antonym: ['เล็ก (small)'],
		},
		{
			word: 'เล็ก',
			translation: 'small',
			pronunciation: 'LEK',
			example:
				'นกกระจอกตัวเล็กกระโดดหาเศษอาหารอยู่บนพื้นสนามหญ้า. (The small sparrow hops scouring food scraps on the grass lawn.)',
			synonym: ['จิ๋ว (tiny)'],
			antonym: ['ใหญ่ (big)'],
		},
		{
			word: 'สูง',
			translation: 'tall',
			pronunciation: 'SOONG',
			example:
				'ตึกระฟ้าหลังนี้มีความสูงตระหง่านมองเห็นได้จากระยะไกล. (This tall skyscraper stands imposingly, visible from long distances.)',
			synonym: ['ชะลูด (lofty)'],
			antonym: ['เตี้ย (short)'],
		},
		{
			word: 'เตี้ย',
			translation: 'short',
			pronunciation: 'DTEEAA',
			example:
				'รั้วไม้เตี้ยหน้าบ้านช่วยให้มองเห็นทิวทัศน์ของสวนดอกไม้ได้ชัดเจน. (The short wooden fence allows an unobstructed view of the flower beds.)',
			synonym: ['ต่ำ (low)'],
			antonym: ['สูง (tall)'],
		},
		{
			word: 'ยาว',
			translation: 'long',
			pronunciation: 'YAAO',
			example:
				'แม่น้ำสายยาวไหลคดเคี้ยวพาดผ่านพื้นที่เกษตรกรรมหลายจังหวัด. (The long winding river snakes through agricultural acreage across provinces.)',
			synonym: [],
			antonym: ['สั้น (short)'],
		},
		{
			word: 'สั้น',
			translation: 'short',
			pronunciation: 'SAN',
			example:
				'เด็กนักเรียนสวมกางเกงขาสั้นสีน้ำเงินไปโรงเรียนทุกวัน. (The school pupil wears short blue shorts to school every day.)',
			synonym: [],
			antonym: ['ยาว (long)'],
		},
		{
			word: 'ง่าย',
			translation: 'easy',
			pronunciation: 'NGAAI',
			example:
				"ข้อสอบวิชาภาษาไทยชุดนี้ทำได้ไม่ยากและเข้าใจคำถามง่ายมาก. (This Thai examination section wasn't arduous, and queries were very easy.)",
			synonym: ['สะดวก (simple)'],
			antonym: ['ยาก (difficult)'],
		},
		{
			word: 'ยาก',
			translation: 'difficult',
			pronunciation: 'YAAK',
			example:
				'โจทย์ปัญหาคณิตศาสตร์ข้อนี้นับว่ายากเกินกว่าที่เด็กประถมจะแก้ได้. (This math problem counts as too difficult for grade schoolers to resolve.)',
			synonym: ['ลำบาก (hard)'],
			antonym: ['ง่าย (easy)'],
		},
		{
			word: 'เร็ว',
			translation: 'fast',
			pronunciation: 'REO',
			example:
				'รถไฟด่วนขบวนใหม่แล่นด้วยความเร็วสูงมุ่งหน้าสู่หัวเมืองใหญ่. (The express bullet train glides at high fast speeds towards capitals.)',
			synonym: ['ว่องไว (swift)'],
			antonym: ['ช้า (slow)'],
		},
		{
			word: 'ช้า',
			translation: 'slow',
			pronunciation: 'CHAA',
			example:
				'เต่าเดินก้าวขาอย่างช้าๆ ข้ามพื้นถนนดินในสวนผลไม้. (The tortoise moves legs slow paces crossing dirt alleys in orchards.)',
			synonym: ['เชื่องช้า (sluggish)'],
			antonym: ['เร็ว (fast)'],
		},
		{
			word: 'ใหม่',
			translation: 'new',
			pronunciation: 'MAI',
			example:
				'เขาถอยรถยนต์คันใหม่ป้ายแดงออกมาใช้งานเดินทางไปทำงาน. (He drove the brand new red-plated car out for work trips.)',
			synonym: ['สดใหม่ (fresh)'],
			antonym: ['เก่า (old)'],
		},
		{
			word: 'เก่า',
			translation: 'old',
			pronunciation: 'GAO',
			example:
				"บ้านไม้เก่าแก่ริมคลองหลังนี้สร้างขึ้นมาตั้งแต่สมัยคุณทวด. (This old wooden canal house was constructed back in great-grandfather's era.)",
			synonym: ['โบราณ (ancient)'],
			antonym: ['ใหม่ (new)'],
		},
		{
			word: 'แพง',
			translation: 'expensive',
			pronunciation: 'PHAENG',
			example:
				'นาฬิกาข้อมือเรือนหรูในตู้โชว์มีราคาแพงลิบลิ่วเกินเอื้อม. (The luxury wristwatch displayed behind glass carries an expensive tag.)',
			synonym: [],
			antonym: ['ถูก (cheap)'],
		},
		{
			word: 'ถูก',
			translation: 'cheap',
			pronunciation: 'THOOK',
			example:
				'ผักสดที่ตลาดเช้ามีราคาถูกและคุณภาพดีเพราะชาวสวนนำมาขายเอง. (Produce at morning stalls is cheap and quality as growers sell direct.)',
			synonym: ['ย่อมเยา (affordable)'],
			antonym: ['แพง (expensive)'],
		},
		{
			word: 'แข็งแรง',
			translation: 'strong',
			pronunciation: 'khaeng-RAENG',
			example:
				'นักกีฬายกน้ำหนักมีโครงสร้างร่างกายกำยำและมีกล้ามเนื้อแข็งแรง. (Weightlifters possess brawny frames with remarkably strong muscles.)',
			synonym: ['บึกบึน (robust)'],
			antonym: ['อ่อนแอ (weak)'],
		},
		{
			word: 'อ่อนแอ',
			translation: 'weak',
			pronunciation: 'on-AE',
			example:
				'ลูกนกที่เพิ่งฟักออกจากไข่ยังมีร่างกายที่อ่อนแอมาก. (Hatchlings that just cracked shells still possess fragile, weak bodies.)',
			synonym: ['เปราะบาง (frail)'],
			antonym: ['แข็งแรง (strong)'],
		},
		{
			word: 'มีความสุข',
			translation: 'happy',
			pronunciation: 'mee-khwaam-SOOK',
			example:
				'ทุกคนในครอบครัวยิ้มแย้มและมีความสุขกับการได้รับประทานอาหารพร้อมหน้า. (Everyone in the household grinned, truly happy sharing meals together.)',
			synonym: ['เบิกบาน (joyful)'],
			antonym: ['เศร้า (sad)'],
		},
		{
			word: 'เศร้า',
			translation: 'sad',
			pronunciation: 'SAO',
			example:
				'ใบหน้าของเขาดูหม่นหมองและเศร้าเมื่อได้ยินข่าวที่ไม่สู้ดี. (His expression turned gloomy and sad hearing unflattering tidings.)',
			synonym: ['โศกเศร้า (sorrowful)'],
			antonym: ['ร่าเริง (cheerful)'],
		},
		{
			word: 'ร้อน',
			translation: 'hot',
			pronunciation: 'RAWN',
			example:
				'แสงแดดตอนเที่ยงวันส่องจ้าทำให้อากาศภายนอกร้อนอบอ้าวมาก. (Noontime solar glare shines searingly, making outside air swelteringly hot.)',
			synonym: ['อบอ้าว (sweltering)'],
			antonym: ['หนาว (cold)'],
		},
		{
			word: 'หนาว',
			translation: 'cold',
			pronunciation: 'NAAO',
			example:
				'ลมพัดแรงบนยอดดอยทำให้อากาศยามค่ำคืนหนาวเหน็บจับใจ. (Gale winds howling on mountain peaks turn night temperatures bitterly cold.)',
			synonym: ['เย็นเยือก (frigid)'],
			antonym: ['ร้อน (hot)'],
		},
		{
			word: 'ชัดเจน',
			translation: 'clear',
			pronunciation: 'chat-JEEN',
			example:
				'อาจารย์อธิบายเนื้อหาและยกตัวอย่างประกอบได้ชัดเจนเข้าใจง่าย. (The lecturer clarifies subject chapters, furnishing clear explanations.)',
			synonym: ['กระจ่าง (evident)'],
			antonym: ['คลุมเครือ (vague)'],
		},
		{
			word: 'มืด',
			translation: 'dark',
			pronunciation: 'MEUT',
			example:
				'พอตะวันลับขอบฟ้า ทางเดินในซอยเปลี่ยวก็เปลี่ยนเป็นมืดสนิท. (Once the sun set beyond horizons, the alleyway turned pitch dark.)',
			synonym: ['มืดมิด (murky)'],
			antonym: ['สว่าง (bright)'],
		},
		{
			word: 'แข็ง',
			translation: 'hard',
			pronunciation: 'KHAENG',
			example:
				'ก้อนหินริมลำธารมีเนื้อแน่นและแข็งจนทุบไม่แตกง่ายๆ. (River bank boulders possess dense mass, rock hard against easy cracking.)',
			synonym: ['แน่นหนา (solid)'],
			antonym: ['นุ่ม (soft)'],
		},
		{
			word: 'นุ่ม',
			translation: 'soft',
			pronunciation: 'NOOM',
			example:
				'เด็กน้อยชอบนอนกอดตุ๊กตาหมีขนปุยเนื้อนุ่มบนเตียงนอน. (The infant cuddles the soft fluffy teddy bear on the crib cot.)',
			synonym: ['นุ่มนวล (tender)'],
			antonym: ['แข็ง (hard)'],
		},
		{
			word: 'สะอาด',
			translation: 'clean',
			pronunciation: 'sa-AAT',
			example:
				'จานชามในห้องครัวถูกล้างและเช็ดจนแห้งสะอาดปราศจากคราบมัน. (Kitchen dishware got washed and dried clean, devoid of grease stains.)',
			synonym: ['หมดจด (spotless)'],
			antonym: ['สกปรก (dirty)'],
		},
		{
			word: 'สกปรก',
			translation: 'dirty',
			pronunciation: 'sok-ga-PROK',
			example:
				'อย่าสวมรองเท้าที่เปื้อนโคลนสกปรกเข้ามาเดินในบ้าน. (Do not wear muddy, dirty shoes to walk inside the house.)',
			synonym: ['เลอะเทอะ (stained)'],
			antonym: ['สะอาด (clean)'],
		},
		{
			word: 'เต็ม',
			translation: 'full',
			pronunciation: 'DTEM',
			example:
				'ลานจอดรถของห้างสรรพสินค้ามีรถจอดอยู่จนเต็มทุกช่อง. (The mall parking lot is completely full of parked cars in every slot.)',
			synonym: ['แน่น (packed)'],
			antonym: ['ว่างเปล่า (empty)'],
		},
		{
			word: 'ว่างเปล่า',
			translation: 'empty',
			pronunciation: 'waang-PLAAO',
			example:
				'ห้องทำงานดูเงียบเหงาและว่างเปล่าหลังจากทุกคนกลับบ้าน. (The office looks quiet and empty after everyone has gone home.)',
			synonym: ['โล่ง (vacant)'],
			antonym: ['เต็ม (full)'],
		},
		{
			word: 'หวาน',
			translation: 'sweet',
			pronunciation: 'WAAN',
			example:
				'มะม่วงสุกจานนี้มีรสชาติหวานฉ่ำชื่นใจมาก. (This plate of ripe mango tastes wonderfully juicy and sweet.)',
			synonym: [],
			antonym: ['ขม (bitter)'],
		},
		{
			word: 'ขม',
			translation: 'bitter',
			pronunciation: 'KHOM',
			example:
				'ยาต้มสมุนไพรหม้อนี้มีรสชาติขมจัดแต่รักษาโรคได้ดี. (This pot of boiled herbal medicine tastes very bitter but cures illness well.)',
			synonym: [],
			antonym: ['หวาน (sweet)'],
		},
		{
			word: 'มีชื่อเสียง',
			translation: 'famous',
			pronunciation: 'mee-cheu-SEEANG',
			example:
				'เขาเป็นนักร้องที่มีชื่อเสียงโด่งดังไปทั่วทั้งภูมิภาค. (He is a famous singer renowned across the entire region.)',
			synonym: ['โด่งดัง (celebrated)'],
			antonym: ['ไม่รู้จัก (unknown)'],
		},
		{
			word: 'ไม่รู้จัก',
			translation: 'unknown',
			pronunciation: 'mai-roo-JAK',
			example:
				'นักเดินทางเดินหลงเข้าไปในตรอกที่ไม่รู้จักเพียงลำพัง. (The traveler wandered alone into an unknown alley.)',
			synonym: ['แปลกหน้า (unfamiliar)'],
			antonym: ['มีชื่อเสียง (famous)'],
		},
		{
			word: 'รวย',
			translation: 'rich',
			pronunciation: 'RUAI',
			example:
				'เศรษฐีใจบุญที่ร่ำรวยบริจาคเงินสร้างโรงเรียนในชนบท. (The rich philanthropist donated money to build a rural school.)',
			synonym: ['มั่งคั่ง (wealthy)'],
			antonym: ['จน (poor)'],
		},
		{
			word: 'จน',
			translation: 'poor',
			pronunciation: 'JON',
			example:
				'ครอบครัวที่ยากจนยังคงได้รับความช่วยเหลือเรื่องอาหารแห้ง. (The poor family still receives assistance with dry rations.)',
			synonym: ['ยากจน (destitute)'],
			antonym: ['รวย (rich)'],
		},
		{
			word: 'เปิด',
			translation: 'open',
			pronunciation: 'POET',
			example:
				'ประตูหน้าต่างทุกบานเปิดกว้างเพื่อรับลมเย็นยามสาย. (All doors and windows are open wide to catch the late morning breeze.)',
			synonym: ['อ้า (ajar)'],
			antonym: ['ปิด (closed)'],
		},
		{
			word: 'ปิด',
			translation: 'closed',
			pronunciation: 'BPIT',
			example:
				'ร้านสะดวกซื้อต้องปิดประตูซ่อมแซมระบบไฟฟ้าชั่วคราว. (The convenience store had to remain closed to repair electrical systems temporarily.)',
			synonym: [],
			antonym: ['เปิด (open)'],
		},
		{
			word: 'น่าสนใจ',
			translation: 'interesting',
			pronunciation: 'naa-son-JAI',
			example:
				'สารคดีธรรมชาติชุดนี้นำเสนอเกร็ดความรู้ที่น่าสนใจมากมาย. (This nature documentary presents an array of interesting facts.)',
			synonym: ['ชวนติดตาม (engaging)'],
			antonym: ['น่าเบื่อ (boring)'],
		},
		{
			word: 'น่าเบื่อ',
			translation: 'boring',
			pronunciation: 'naa-BUEA',
			example:
				'การนั่งฟังบรรยายที่ยาวนานโดยไม่มีการพักเป็นเรื่องน่าเบื่อ. (Sitting through long lectures without breaks is boring.)',
			synonym: ['ซ้ำซาก (monotonous)'],
			antonym: ['น่าสนใจ (interesting)'],
		},
		{
			word: 'ซื่อสัตย์',
			translation: 'honest',
			pronunciation: 'sue-SAT',
			example:
				'พนักงานเก็บเงินที่ซื่อสัตย์ส่งคืนกระเป๋าสตางค์ให้ลูกค้า. (The honest cashier returned the lost wallet to the customer.)',
			synonym: ['สุจริต (trustworthy)'],
			antonym: ['คดโกง (deceitful)'],
		},
		{
			word: 'โกหก',
			translation: 'lying',
			pronunciation: 'goh-HOK',
			example:
				'คนที่มีนิสัยโกหกมักจะสูญเสียความน่าเชื่อถือจากเพื่อนฝูง. (A lying person often loses credibility among peers.)',
			synonym: ['ตลบตะแลง (untruthful)'],
			antonym: ['ซื่อสัตย์ (honest)'],
		},
		{
			word: 'กระปรี้กระเปร่า',
			translation: 'energetic',
			pronunciation: 'gra-pree-gra-PRAO',
			example:
				'การดื่มน้ำเย็นและการยืดเส้นยืดสายทำให้เขารู้สึกกระปรี้กระเปร่า. (Drinking cold water and stretching made him feel energetic.)',
			synonym: ['สดชื่น (lively)'],
			antonym: ['เหนื่อย (tired)'],
		},
		{
			word: 'ใจดี',
			translation: 'kind',
			pronunciation: 'jai-DEE',
			example:
				'คุณยายใจดีแบ่งปันขนมหวานให้เด็กๆ ข้างบ้านเสมอ. (The kind grandmother always shares sweets with the neighbor children.)',
			synonym: ['เมตตา (benevolent)'],
			antonym: ['โหดร้าย (cruel)'],
		},
		{
			word: 'โหดร้าย',
			translation: 'cruel',
			pronunciation: 'hoht-RAAI',
			example:
				'การทอดทิ้งสัตว์เลี้ยงไว้ข้างถนนเป็นการกระทำที่โหดร้าย. (Abandoning pets on street curbs is a cruel act.)',
			synonym: ['ทารุณ (brutal)'],
			antonym: ['ใจดี (kind)'],
		},
		{
			word: 'สุภาพ',
			translation: 'polite',
			pronunciation: 'soo-PHAAP',
			example:
				'บริกรหนุ่มคอยต้อนรับลูกค้าทุกคนด้วยกิริยาท่าทางที่สุภาพ. (The young waiter attends to every customer with polite manners.)',
			synonym: ['เรียบร้อย (courteous)'],
			antonym: ['หยาบคาย (rude)'],
		},
		{
			word: 'หยาบคาย',
			translation: 'rude',
			pronunciation: 'yaap-KHAAI',
			example:
				'การตะโกนด่าทอผู้อื่นในที่สาธารณะเป็นพฤติกรรมที่หยาบคาย. (Yelling insults at others in public is rude behavior.)',
			synonym: ['กักขฬะ (ill-mannered)'],
			antonym: ['สุภาพ (polite)'],
		},
		{
			word: 'ไม่ซื่อสัตย์',
			translation: 'unfaithful',
			pronunciation: 'mai-sue-SAT',
			example:
				'หุ้นส่วนที่ไม่ซื่อสัตย์แอบยักยอกเงินทุนของบริษัท. (The unfaithful business partner secretly embezzled company funds.)',
			synonym: ['ทรยศ (disloyal)'],
			antonym: ['ซื่อสัตย์ (faithful)'],
		},
		{
			word: 'ยุติธรรม',
			translation: 'fair',
			pronunciation: 'yoot-dti-THAM',
			example:
				'ผู้ตัดสินทำหน้าที่ควบคุมการแข่งขันอย่างซื่อตรงและยุติธรรม. (The referee managed the game uprightly and fair.)',
			synonym: ['เที่ยงธรรม (equitable)'],
			antonym: ['ไม่ยุติธรรม (unfair)'],
		},
		{
			word: 'ไม่ยุติธรรม',
			translation: 'unfair',
			pronunciation: 'mai-yoot-dti-THAM',
			example:
				'การตัดสิทธิ์ผู้แข่งขันโดยไม่มีเหตุผลชัดเจนถือว่าไม่ยุติธรรม. (Disqualifying candidates without clear reasons is unfair.)',
			synonym: ['ลำเอียง (biased)'],
			antonym: ['ยุติธรรม (fair)'],
		},
		{
			word: 'ปลอดภัย',
			translation: 'safe',
			pronunciation: 'bplawt-PHAI',
			example:
				'ผู้โดยสารทุกคนคาดเข็มขัดนิรภัยเพื่อการเดินทางที่ปลอดภัย. (Every passenger fastens seatbelts for safe travel.)',
			synonym: ['ไร้ภัย (secure)'],
			antonym: ['อันตราย (dangerous)'],
		},
		{
			word: 'อันตราย',
			translation: 'dangerous',
			pronunciation: 'an-dta-RAAI',
			example:
				'การขับรถเร็วเกินอัตราที่กำหนดบนถนนเปียกลื่นนั้นอันตรายมาก. (Speeding beyond limits on wet roads is extremely dangerous.)',
			synonym: ['เสี่ยงภัย (hazardous)'],
			antonym: ['ปลอดภัย (safe)'],
		},
		{
			word: 'จำเป็น',
			translation: 'necessary',
			pronunciation: 'jam-BPEN',
			example:
				'น้ำสะอาดและยารักษาโรคเป็นสิ่งจำเป็นต่อการดำรงชีวิต. (Clean water and medicine are necessary for sustaining life.)',
			synonym: ['ขาดไม่ได้ (essential)'],
			antonym: ['ไม่จำเป็น (unnecessary)'],
		},
		{
			word: 'ไม่จำเป็น',
			translation: 'unnecessary',
			pronunciation: 'mai-jam-BPEN',
			example:
				'การซื้อสิ่งของฟุ่มเฟือยในช่วงนี้เป็นรายจ่ายที่ไม่จำเป็น. (Buying luxury trinkets right now is an unnecessary expense.)',
			synonym: ['เกินความจำเป็น (superfluous)'],
			antonym: ['จำเป็น (necessary)'],
		},
		{
			word: 'ยุ่ง',
			translation: 'busy',
			pronunciation: 'YOONG',
			example:
				'หัวหน้าแผนกกำลังยุ่งอยู่กับการเตรียมเอกสารประชุมด่วน. (The department head is busy preparing urgent meeting documents.)',
			synonym: ['มีงานล้นมือ (preoccupied)'],
			antonym: ['ว่าง (free)'],
		},
		{
			word: 'ว่าง',
			translation: 'free',
			pronunciation: 'WAANG',
			example:
				'วันนี้ห้องประชุมใหญ่ยังคงว่างและสามารถจองใช้งานได้. (The main conference hall is still free today and can be booked.)',
			synonym: ['ปลอดโปร่ง (unoccupied)'],
			antonym: ['ยุ่ง (busy)'],
		},
		{
			word: 'รับผิดชอบ',
			translation: 'responsible',
			pronunciation: 'rap-phit-CHAWP',
			example:
				'เขาเป็นหัวหน้าครอบครัวที่มีความรับผิดชอบต่องานและลูกๆ. (He is a responsible head of household toward his work and kids.)',
			synonym: [],
			antonym: ['ไม่รับผิดชอบ (irresponsible)'],
		},
		{
			word: 'ไม่รับผิดชอบ',
			translation: 'irresponsible',
			pronunciation: 'mai-rap-phit-CHAWP',
			example:
				'การทิ้งงานกลางคันโดยไม่แจ้งล่วงหน้าเป็นการกระทำที่ไม่รับผิดชอบ. (Abandoning work halfway without prior notice is irresponsible.)',
			synonym: ['ละเลย (negligent)'],
			antonym: ['รับผิดชอบ (responsible)'],
		},
		{
			word: 'แตกต่าง',
			translation: 'different',
			pronunciation: 'taek-DTAANG',
			example:
				'สองพี่น้องมีบุคลิกภาพและความสนใจที่แตกต่างกันอย่างสิ้นเชิง. (The two siblings have entirely different personalities and interests.)',
			synonym: ['ผิดแผก (distinct)'],
			antonym: ['เหมือนกัน (same)'],
		},
		{
			word: 'เหมือนกัน',
			translation: 'same',
			pronunciation: 'meuan-GAN',
			example:
				'ฝาแฝดคู่นี้สวมชุดนักเรียนลายเดียวกันและไว้ทรงผมเหมือนกัน. (These twins wear identical uniform prints and the same haircut.)',
			synonym: ['คล้ายคลึง (identical)'],
			antonym: ['แตกต่าง (different)'],
		},
		{
			word: 'ลึก',
			translation: 'deep',
			pronunciation: 'LEUK',
			example:
				'บ่อน้ำโบราณหลังวัดขุดลึกลงไปในชั้นหินหลายสิบเมตร. (The ancient well behind the temple is dug deep into bedrock.)',
			synonym: [],
			antonym: ['ตื้น (shallow)'],
		},
		{
			word: 'ตื้น',
			translation: 'shallow',
			pronunciation: 'TEUN',
			example:
				'เด็กเล็กสามารถลงเล่นน้ำในลำธารส่วนที่ตื้นได้อย่างปลอดภัย. (Young kids can splash safely in the shallow parts of the brook.)',
			synonym: [],
			antonym: ['ลึก (deep)'],
		},
		{
			word: 'หนัก',
			translation: 'heavy',
			pronunciation: 'NAK',
			example:
				'กล่องบรรจุอะไหล่เครื่องยนต์กล่องนี้มีน้ำหนักมากและยกหนักเกินไป. (This crate of engine parts carries great weight and is too heavy.)',
			synonym: [],
			antonym: ['เบา (light)'],
		},
		{
			word: 'เบา',
			translation: 'light',
			pronunciation: 'BAO',
			example:
				'กระเป๋าเป้ใบนี้ทำจากผ้าสังเคราะห์พิเศษจึงมีน้ำหนักเบา. (This backpack is made of specialty synthetic cloth, making it light.)',
			synonym: [],
			antonym: ['หนัก (heavy)'],
		},
		{
			word: 'จริงจัง',
			translation: 'serious',
			pronunciation: 'jing-JANG',
			example:
				'ทีมงานทุกคนมีท่าทางจริงจังขณะร่วมวางแผนแก้ปัญหาวิกฤต. (All crew members maintain a serious posture planning crisis remedies.)',
			synonym: ['เคร่งเครียด (grave)'],
			antonym: ['เล่นๆ (casual)'],
		},
		{
			word: 'สนุก',
			translation: 'fun',
			pronunciation: 'sa-NOOK',
			example:
				"เด็กๆ ร้องเพลงและเล่นเกมกันอย่างสนุกในงานวันเด็ก. (Children sang songs and played games in a fun mood on Children's Day.)",
			synonym: ['เพลิดเพลิน (entertaining)'],
			antonym: ['น่าเบื่อ (boring)'],
		},
		{
			word: 'สุขภาพดี',
			translation: 'healthy',
			pronunciation: 'sook-kha-phaap-DEE',
			example:
				'คนที่รับประทานอาหารครบหมู่และออกกำลังกายมักมีร่างกายสุขภาพดี. (Those eating balanced meals and exercising often stay healthy.)',
			synonym: ['แข็งแรง (robust)'],
			antonym: ['ป่วย (sick)'],
		},
		{
			word: 'ป่วย',
			translation: 'sick',
			pronunciation: 'PUAI',
			example:
				'เขาต้องนอนพักรักษาตัวอยู่ที่บ้านเพราะป่วยเป็นไข้หวัดใหญ่. (He must lie resting at home because he is sick with the flu.)',
			synonym: ['ไม่สบาย (ill)'],
			antonym: ['สบายดี (well)'],
		},
		{
			word: 'โบราณ',
			translation: 'ancient',
			pronunciation: 'boh-RAAN',
			example:
				'เมืองโบราณแห่งนี้มีซากปรักหักพังของวัดเก่าแก่หลายร้อยปี. (This ancient city retains centuries-old ruins of temples.)',
			synonym: ['เก่าแก่ (antique)'],
			antonym: ['ทันสมัย (modern)'],
		},
		{
			word: 'โง่',
			translation: 'foolish',
			pronunciation: 'NGOH',
			example:
				'การเชื่อข่าวปลอมโดยไม่ตรวจสอบข้อเท็จจริงเป็นการตัดสินใจที่โง่เขลา. (Trusting fake news without fact-checking is a foolish choice.)',
			synonym: ['เขลา (ignorant)'],
			antonym: ['ฉลาด (clever)'],
		},
		{
			word: 'ฉลาด',
			translation: 'wise',
			pronunciation: 'cha-LAAT',
			example:
				'เด็กชายคิดค้นวิธีลัดในการแก้โจทย์ปัญหาได้อย่างฉลาดหลักแหลม. (The boy figured out shortcuts to solve the problem in a clever, wise way.)',
			synonym: ['ปราดเปรื่อง (smart)'],
			antonym: ['โง่ (foolish)'],
		},
		{
			word: 'อร่อย',
			translation: 'delicious',
			pronunciation: 'a-ROI',
			example:
				'ก๋วยเตี๋ยวเรือร้านนี้ปรุงน้ำซุปได้เข้มข้นและอร่อยมาก. (This boat noodle vendor prepares richly seasoned and delicious broth.)',
			synonym: ['โอชา (flavorful)'],
			antonym: ['จืด (tasteless)'],
		},
		{
			word: 'จืด',
			translation: 'tasteless',
			pronunciation: 'JEUT',
			example:
				'แกงจืดชามนี้ลืมใส่เครื่องปรุงรสจนทำให้มีรสชาติจืดชืด. (This broth bowl lacked seasonings, leaving it rather tasteless.)',
			synonym: ['จืดชืด (bland)'],
			antonym: ['จัดจ้าน (flavorful)'],
		},
		{
			word: 'ผอม',
			translation: 'thin',
			pronunciation: 'PHOM',
			example:
				'เขาออกกำลังกายคุมน้ำหนักจนมีรูปร่างผอมเพรียวสมส่วน. (He worked out and managed his diet until he had a lean, thin build.)',
			synonym: ['เพรียว (slender)'],
			antonym: ['อ้วน (fat)'],
		},
		{
			word: 'อ้วน',
			translation: 'fat',
			pronunciation: 'UAN',
			example:
				'แมวส้มตัวกลมกินอาหารเยอะจนอ้วนท้วนสมบูรณ์. (The orange cat eats hearty amounts until it is pleasantly fat.)',
			synonym: ['ท้วม (plump)'],
			antonym: ['ผอม (thin)'],
		},
		{
			word: 'สวย',
			translation: 'beautiful',
			pronunciation: 'SUAI',
			example:
				'ทุ่งดอกบัวแดงบานสะพรั่งดูงดงามสวยจับตายามเช้าตรู่. (The blooming red lotus field looks strikingly beautiful at dawn.)',
			synonym: ['งดงาม (lovely)'],
			antonym: ['ขี้เหร่ (ugly)'],
		},
		{
			word: 'ขี้เหร่',
			translation: 'ugly',
			pronunciation: 'khee-RAY',
			example:
				'ถึงภายนอกจะดูขี้เหร่แต่เนื้อผลไม้ข้างในกลับหวานหอม. (Though exterior peel looks ugly, fruit pulp inside is fragrant.)',
			synonym: ['อัปลักษณ์ (unattractive)'],
			antonym: ['สวย (beautiful)'],
		},
		{
			word: 'ทันสมัย',
			translation: 'modern',
			pronunciation: 'than-sa-MAI',
			example:
				'อาคารสำนักงานแห่งนี้ติดตั้งระบบควบคุมไฟฟ้าที่ทันสมัย. (This office edifice houses a modern computerized electrical system.)',
			synonym: ['ล้ำสมัย (contemporary)'],
			antonym: ['โบราณ (ancient)'],
		},
		{
			word: 'ดั้งเดิม',
			translation: 'traditional',
			pronunciation: 'dang-DOEM',
			example:
				'ชาวบ้านยังคงรักษาวิถีชีวิตและประเพณีดั้งเดิมไว้อย่างเหนียวแน่น. (Villagers steadfastly uphold their traditional lifestyle customs.)',
			synonym: ['เก่าแก่ (customary)'],
			antonym: ['สมัยใหม่ (modern)'],
		},
		{
			word: 'ร่าเริง',
			translation: 'cheerful',
			pronunciation: 'raa-ROENG',
			example:
				'เด็กๆ ส่งเสียงหัวเราะอย่างร่าเริงขณะวิ่งเล่นบนหาดทราย. (Children laughed with cheerful giggles while running on sand.)',
			synonym: ['เบิกบาน (merry)'],
			antonym: ['เศร้าซึม (depressed)'],
		},
		{
			word: 'ขี้อาย',
			translation: 'shy',
			pronunciation: 'khee-AAI',
			example:
				'เด็กหญิงตัวเล็กเป็นคนขี้อายและมักหลบอยู่ข้างหลังแม่เสมอ. (The little girl is shy and always ducks behind her mother.)',
			synonym: ['เหนียมอาย (bashful)'],
			antonym: ['เปิดเผย (extroverted)'],
		},
		{
			word: 'เปิดเผย',
			translation: 'extroverted',
			pronunciation: 'poet-PHOEAI',
			example:
				'เขาเป็นคนเปิดเผยและชอบพบปะพูดคุยกับเพื่อนใหม่ในงานสัมมนา. (He is an extroverted person who enjoys meeting new friends at seminars.)',
			synonym: ['เปิดกว้าง (outgoing)'],
			antonym: ['ขี้อาย (shy)'],
		},
		{
			word: 'สบาย',
			translation: 'comfortable',
			pronunciation: 'sa-BAAI',
			example:
				'เก้าอี้โซฟาบุนวมตัวใหญ่นี้นั่งนุ่มสบายเหมาะแก่การพักผ่อน. (This oversized upholstered sofa seat feels comfortable for relaxing.)',
			synonym: ['สะดวกสบาย (cozy)'],
			antonym: ['ไม่สบาย (uncomfortable)'],
		},
		{
			word: 'ไม่สบาย',
			translation: 'uncomfortable',
			pronunciation: 'mai-sa-BAAI',
			example:
				'เขารู้สึกอึดอัดและไม่สบายตัวเวลานั่งทำงานบนเก้าอี้ไม้แข็งๆ. (He feels stiff and uncomfortable working on hard wooden chairs.)',
			synonym: ['อึดอัด (uneasy)'],
			antonym: ['สบาย (comfortable)'],
		},
		{
			word: 'มั่นใจ',
			translation: 'certain',
			pronunciation: 'man-JAI',
			example:
				'ผู้สมัครตอบคำถามอย่างฉะฉานด้วยความรู้สึกมั่นใจในความสามารถ. (The candidate answered queries firmly, certain of their abilities.)',
			synonym: ['แน่ใจ (confident)'],
			antonym: ['ลังเล (doubtful)'],
		},
		{
			word: 'ลังเล',
			translation: 'doubtful',
			pronunciation: 'lang-LAY',
			example:
				'เขายังคงลังเลว่าจะเลือกซื้อบ้านเดี่ยวหรือคอนโดมิเนียม. (He remains doubtful whether to buy a detached house or condo.)',
			synonym: ['สองจิตสองใจ (hesitant)'],
			antonym: ['มั่นใจ (certain)'],
		},
		{
			word: 'อดทน',
			translation: 'patient',
			pronunciation: 'ot-THON',
			example:
				'คุณครูมีความอดทนสูงในการสอนเด็กเล็กหัดเขียนหนังสือ. (The teacher is very patient tutoring little kids learning to write.)',
			synonym: ['ใจเย็น (persevering)'],
			antonym: ['ไม่อดทน (impatient)'],
		},
		{
			word: 'ไม่อดทน',
			translation: 'impatient',
			pronunciation: 'mai-ot-THON',
			example:
				'คนขับรถที่ไม่อดทนมักจะบีบแตรไล่รถคันอื่นทันทีที่ไฟเขียว. (An impatient driver honks at other cars the instant lights turn green.)',
			synonym: ['ใจร้อน (restless)'],
			antonym: ['อดทน (patient)'],
		},
		{
			word: 'เค็ม',
			translation: 'salty',
			pronunciation: 'KHEM',
			example:
				'น้ำทะเลมีรสชาติเค็มจัดเพราะมีปริมาณเกลือละลายอยู่มาก. (Sea water tastes very salty due to high amounts of dissolved salt.)',
			synonym: [],
			antonym: ['จืด (bland)'],
		},
		{
			word: 'เปรี้ยว',
			translation: 'sour',
			pronunciation: 'PREEAW',
			example:
				'น้ำมะนาวคั้นสดมีรสชาติเปรี้ยวจี๊ดถึงใจ. (Freshly squeezed lime juice carries a sharply sour tang.)',
			synonym: [],
			antonym: ['หวาน (sweet)'],
		},
		{
			word: 'เผ็ด',
			translation: 'spicy',
			pronunciation: 'PHET',
			example:
				'ส้มตำจานนี้ใส่พริกหลายเม็ดจนมีรสชาติเผ็ดร้อนมาก. (This papaya salad packs several chilies and tastes spicy.)',
			synonym: ['จัดจ้าน (hot)'],
			antonym: ['จืด (mild)'],
		},
		{
			word: 'กลม',
			translation: 'round',
			pronunciation: 'GLOM',
			example:
				'ดวงจันทร์วันเพ็ญทอแสงเป็นวงกลมสว่างสุกใสเหนือท้องฟ้า. (The full moon beams as a bright round orb over the night sky.)',
			synonym: [],
			antonym: ['แบน (flat)'],
		},
		{
			word: 'แบน',
			translation: 'flat',
			pronunciation: 'BAEN',
			example:
				'แผ่นแป้งโรตีถูกนวดจนมีลักษณะแบนบางก่อนนำไปทอด. (The roti dough is rolled out flat and thin before frying.)',
			synonym: ['ราบ (even)'],
			antonym: ['กลม (round)'],
		},
		{
			word: 'แคบ',
			translation: 'narrow',
			pronunciation: 'KHAAEP',
			example:
				'ตรอกซอยนี้ทั้งแคบและชันจนรถยนต์ไม่สามารถแล่นผ่านได้. (This alley is both narrow and steep, preventing cars from passing.)',
			synonym: ['คับแคบ (cramped)'],
			antonym: ['กว้าง (wide)'],
		},
		{
			word: 'กว้าง',
			translation: 'wide',
			pronunciation: 'GWAANG',
			example:
				'ถนนสายหลักหน้าเมืองได้รับการขยายจนกว้างขวางเพื่อรองรับรถ. (The highway outside town was expanded wide to absorb vehicles.)',
			synonym: ['กว้างขวาง (broad)'],
			antonym: ['แคบ (narrow)'],
		},
		{
			word: 'เปียก',
			translation: 'wet',
			pronunciation: 'PEEAK',
			example:
				'เสื้อผ้าของเขาเปียกชุ่มไปด้วยน้ำฝนหลังจากเดินตากพายุกลับบ้าน. (His clothes were thoroughly wet after walking home in the storm.)',
			synonym: ['ชุ่ม (damp)'],
			antonym: ['แห้ง (dry)'],
		},
		{
			word: 'แห้ง',
			translation: 'dry',
			pronunciation: 'HAENG',
			example:
				'ผ้าเช็ดตัวผืนนี้ตากแดดจนแห้งสนิทและพร้อมนำมาใช้งาน. (This bath towel was sunned completely dry and ready for use.)',
			synonym: [],
			antonym: ['เปียก (wet)'],
		},
		{
			word: 'เงียบ',
			translation: 'quiet',
			pronunciation: 'NGEEAP',
			example:
				'บรรยากาศภายในห้องอ่านหนังสือของหอสมุดเงียบสงบมาก. (The atmosphere inside the library reading hall is quiet.)',
			synonym: ['สงบ (tranquil)'],
			antonym: ['หนวกหู (noisy)'],
		},
		{
			word: 'หนวกหู',
			translation: 'noisy',
			pronunciation: 'nuak-HOO',
			example:
				'เสียงเครื่องจักรทำงานในเขตก่อสร้างดังรบกวนจนน่าหนวกหู. (Machinery rumbling at the construction site is noisy.)',
			synonym: ['เสียงดัง (clamorous)'],
			antonym: ['เงียบ (quiet)'],
		},
		{
			word: 'เท็จ',
			translation: 'false',
			pronunciation: 'THET',
			example:
				'พยานให้การเท็จต่อหน้าศาลจึงถูกตั้งข้อหาดำเนินคดี. (The witness gave false testimony before the court and was charged.)',
			synonym: ['ปลอม (fake)'],
			antonym: ['จริง (true)'],
		},
		{
			word: 'จริง',
			translation: 'true',
			pronunciation: 'JING',
			example:
				'เรื่องราวที่เขาเล่าเป็นเหตุการณ์จริงที่เกิดขึ้นในหมู่บ้าน. (The story he recounted is a true event that occurred in the village.)',
			synonym: ['แท้จริง (authentic)'],
			antonym: ['เท็จ (false)'],
		},
		{
			word: 'ขยัน',
			translation: 'diligent',
			pronunciation: 'kha-YAN',
			example:
				'นักเรียนที่ขยันอ่านหนังสือทบทวนบทเรียนมักจะสอบผ่านได้คะแนนดี. (A diligent student reviewing lessons routinely gets good grades.)',
			synonym: ['มุมานะ (industrious)'],
			antonym: ['ขี้เกียจ (lazy)'],
		},
		{
			word: 'ขี้เกียจ',
			translation: 'lazy',
			pronunciation: 'khee-GEEAT',
			example:
				"เขาไม่ควรนอนตื่นสายและทำตัวขี้เกียจในวันทำงานแบบนี้. (He shouldn't sleep late and behave in a lazy way on workdays.)",
			synonym: ['เฉื่อยชา (slothful)'],
			antonym: ['ขยัน (diligent)'],
		},
		{
			word: 'โสด',
			translation: 'single',
			pronunciation: 'SOHT',
			example:
				'พนักงานสาวคนนี้ยังคงใช้ชีวิตโสดและสนุกกับการเดินทางคนเดียว. (This young female clerk is single and enjoys solo travel.)',
			synonym: [],
			antonym: ['แต่งงานแล้ว (married)'],
		},
		{
			word: 'แต่งงานแล้ว',
			translation: 'married',
			pronunciation: 'taeng-ngaan-LAAEO',
			example:
				'เขาทั้งคู่แต่งงานแล้วและย้ายไปสร้างครอบครัวใหม่อยู่แถบชานเมือง. (They are married and moved to build a home in the suburbs.)',
			synonym: ['มีครอบครัวแล้ว (wedded)'],
			antonym: ['โสด (single)'],
		},
		{
			word: 'หอม',
			translation: 'fragrant',
			pronunciation: 'HAWM',
			example:
				'ดอกมะลิส่งกลิ่นหอมชื่นใจไปทั่วทั้งบริเวณบ้านยามค่ำคืน. (Jasmine wafts a fragrant scent throughout the house at night.)',
			synonym: ['หอมหวล (aromatic)'],
			antonym: ['เหม็น (stinky)'],
		},
		{
			word: 'เหม็น',
			translation: 'stinky',
			pronunciation: 'MEN',
			example:
				'กองขยะเปียกที่ทิ้งค้างคืนส่งกลิ่นเหม็นคละคลุ้งไปทั่วซอย. (The overnight wet garbage heap smells stinky all down the alley.)',
			synonym: ['เน่าเหม็น (foul-smelling)'],
			antonym: ['หอม (fragrant)'],
		},
		{
			word: 'สด',
			translation: 'fresh',
			pronunciation: 'SOT',
			example:
				'แม่ค้าคัดเลือกกุ้งและปลาทะเลสดส่งตรงจากสะพานปลามาขาย. (The vendor picks fresh ocean shrimp and fish directly from the pier.)',
			synonym: ['ใหม่ (crisp)'],
			antonym: ['เน่า (rotten)'],
		},
		{
			word: 'กล้าหาญ',
			translation: 'brave',
			pronunciation: 'glaa-HAAN',
			example:
				'นักดับเพลิงผู้กล้าหาญบุกฝ่ากองเพลิงเข้าไปช่วยเด็กน้อยออกมา. (The brave firefighter pushed through flames to rescue the toddler.)',
			synonym: ['องอาจ (valiant)'],
			antonym: ['ขี้ขลาด (cowardly)'],
		},
		{
			word: 'ขี้ขลาด',
			translation: 'cowardly',
			pronunciation: 'khee-KHLAAT',
			example:
				'คนที่ขี้ขลาดมักจะวิ่งหนีปัญหาแทนที่จะหาทางเผชิญหน้าแก้ไข. (A cowardly person flees issues rather than facing them.)',
			synonym: ['ตาขาว (craven)'],
			antonym: ['กล้าหาญ (brave)'],
		},
		{
			word: 'น่ารัก',
			translation: 'cute',
			pronunciation: 'naa-RAK',
			example:
				'ลูกสุนัขพันธุ์ทางตัวเล็กกระดิกหางอย่างน่ารักเมื่อเห็นเจ้าของ. (The tiny crossbreed puppy wags its tail in a cute way for its owner.)',
			synonym: ['น่าเอ็นดู (charming)'],
			antonym: [],
		},
		{
			word: 'น่ากลัว',
			translation: 'scary',
			pronunciation: 'naa-GLUA',
			example:
				'บ้านร้างหลังเก่าในซอยเปลี่ยวดูมืดทึบและมีบรรยากาศน่ากลัว. (The abandoned house down the lonely lane looks scary.)',
			synonym: ['น่าหวาดเสียว (frightening)'],
			antonym: ['น่ารัก (cute)'],
		},
		{
			word: 'ตลก',
			translation: 'funny',
			pronunciation: 'dta-LOK',
			example:
				'นักแสดงเดี่ยวไมโครโฟนเล่าเรื่องตลกจนผู้ชมหัวเราะลั่นห้อง. (The stand-up comic shared funny stories that had folks laughing aloud.)',
			synonym: ['ขบขัน (amusing)'],
			antonym: ['จริงจัง (serious)'],
		},
		{
			word: 'แปลก',
			translation: 'strange',
			pronunciation: 'PLAAEK',
			example:
				'ผลไม้ป่าชนิดนี้มีรูปทรงและรสชาติแปลกไม่เหมือนใคร. (This wild jungle fruit has a strange shape and unique taste.)',
			synonym: ['ประหลาด (bizarre)'],
			antonym: ['ปกติ (normal)'],
		},
		{
			word: 'ปกติ',
			translation: 'normal',
			pronunciation: 'bpa-ga-DTI',
			example:
				'อุณหภูมิร่างกายของเขากลับมาอยู่ในระดับปกติหลังกินยาลดไข้. (His body temperature returned to a normal level after taking fever meds.)',
			synonym: ['ธรรมดา (ordinary)'],
			antonym: ['แปลก (strange)'],
		},
		{
			word: 'สำคัญ',
			translation: 'important',
			pronunciation: 'sam-KHAN',
			example:
				'การนอนหลับพักผ่อนอย่างเพียงพอเป็นสิ่งสำคัญต่อการฟื้นฟูร่างกาย. (Getting sufficient sleep is an important factor in recovery.)',
			synonym: ['จำเป็น (vital)'],
			antonym: ['ไร้สาระ (trivial)'],
		},
		{
			word: 'โชคดี',
			translation: 'lucky',
			pronunciation: 'chohk-DEE',
			example:
				'เขาเป็นคนโชคดีที่หาตั๋วเครื่องบินเที่ยวสุดท้ายได้ทันเวลา. (He was lucky to find the last available flight ticket on time.)',
			synonym: ['มีบุญ (fortunate)'],
			antonym: ['โชคร้าย (unlucky)'],
		},
		{
			word: 'โชคร้าย',
			translation: 'unlucky',
			pronunciation: 'chohk-RAAI',
			example:
				'คนขับรถคันนั้นโชคร้ายที่ยางรถระเบิดกลางสะพานข้ามแม่น้ำ. (That driver was unlucky that his car tire blew out on the bridge.)',
			synonym: ['อับโชค (unfortunate)'],
			antonym: ['โชคดี (lucky)'],
		},
		{
			word: 'ขรุขระ',
			translation: 'rough',
			pronunciation: 'khroo-KHRA',
			example:
				'ล้อรถสะเทือนอย่างแรงขณะแล่นผ่านพื้นถนนดินลูกรังที่ขรุขระ. (The car wheels vibrated heavily rolling over the rough gravel road.)',
			synonym: ['เป็นหลุมเป็นบ่อ (rugged)'],
			antonym: ['เรียบ (smooth)'],
		},
		{
			word: 'เรียบ',
			translation: 'smooth',
			pronunciation: 'REEAP',
			example:
				'พื้นหินอ่อนภายในห้องโถงได้รับการขัดถูจนเงาวับและเรียบเนียน. (The marble floor in the lobby was polished smooth and glossy.)',
			synonym: ['ราบเรียบ (level)'],
			antonym: ['ขรุขระ (rough)'],
		},
		{
			word: 'หนา',
			translation: 'thick',
			pronunciation: 'NAA',
			example:
				'เขาหยิบเสื้อกันหนาวผ้าขนสัตว์ตัวหนาออกมาสวมใส่สู้ลมหนาว. (He pulled out a thick wool jacket to put on against the frost.)',
			synonym: [],
			antonym: ['บาง (thin)'],
		},
		{
			word: 'บาง',
			translation: 'thin',
			pronunciation: 'BAANG',
			example:
				'กระจกหน้าต่างบานนี้บางเกินไปจนเสี่ยงที่จะแตกหักได้ง่าย. (This windowpane is too thin and risks breaking easily.)',
			synonym: [],
			antonym: ['หนา (thick)'],
		},
		{
			word: 'สว่าง',
			translation: 'bright',
			pronunciation: 'sa-WAANG',
			example:
				'หลอดไฟแอลอีดีดวงใหม่ส่องแสงสว่างจ้าทั่วห้องอ่านหนังสือ. (The new LED bulb shines bright light across the reading room.)',
			synonym: ['กระจ่าง (illuminated)'],
			antonym: ['มืด (dark)'],
		},
		{
			word: 'เมา',
			translation: 'drunk',
			pronunciation: 'MAO',
			example:
				"เขาดื่มสุรามากเกินไปในงานเลี้ยงจนมีอาการเมาและทรงตัวไม่อยู่. (He drank too much liquor at the banquet, became drunk, and couldn't balance.)",
			synonym: ['มึนเมา (intoxicated)'],
			antonym: ['มีสติ (sober)'],
		},
		{
			word: 'หิวน้ำ',
			translation: 'thirsty',
			pronunciation: 'hew-NAAM',
			example:
				'นักกีฬารู้สึกกระหายและหิวน้ำมากหลังจากวิ่งกลางแดดจัด. (The athlete felt very thirsty after running under the scorching sun.)',
			synonym: ['กระหายน้ำ (parched)'],
			antonym: [],
		},
		{
			word: 'อิ่ม',
			translation: 'full',
			pronunciation: 'IM',
			example:
				'ทุกคนรู้สึกอิ่มแปล้หลังรับประทานบุฟเฟต์อาหารค่ำมื้อใหญ่. (Everyone felt comfortably full after dining on the big evening buffet.)',
			synonym: ['อิ่มหนำ (sated)'],
			antonym: ['หิว (hungry)'],
		},
		{
			word: 'แพ้',
			translation: 'allergic',
			pronunciation: 'PHAAE',
			example:
				'เธอมีอาการผื่นคันขึ้นตามผิวหนังเพราะแพ้อาหารทะเลจำพวกกุ้ง. (She developed an itchy skin rash because she is allergic to shrimp.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ระมัดระวัง',
			translation: 'careful',
			pronunciation: 'ra-mat-ra-WANG',
			example:
				'คนขับรถที่ดีควรใช้ความระมัดระวังเป็นพิเศษเมื่อขับผ่านเขตโรงเรียน. (A good driver should be especially careful passing school zones.)',
			synonym: ['รอบคอบ (cautious)'],
			antonym: ['ประมาท (careless)'],
		},
		{
			word: 'ประมาท',
			translation: 'careless',
			pronunciation: 'pra-MAAT',
			example:
				'อุบัติเหตุบนท้องถนนส่วนใหญ่มักเกิดขึ้นจากการขับรถที่ประมาท. (Most road accidents happen because of careless driving.)',
			synonym: ['เลินเล่อ (negligent)'],
			antonym: ['ระมัดระวัง (careful)'],
		},
		{
			word: 'น่าสงสาร',
			translation: 'pitiful',
			pronunciation: 'naa-song-SAAN',
			example:
				'ลูกแมวจรจัดเปียกฝนตัวสั่นดูน่าสงสารจนมีคนรับไปเลี้ยงดู. (The shivering, wet stray kitten looked pitiful until someone adopted it.)',
			synonym: ['น่าเวทนา (pathetic)'],
			antonym: [],
		},
		{
			word: 'เข้มงวด',
			translation: 'strict',
			pronunciation: 'khem-NGUAT',
			example:
				'โรงเรียนประจำมีกฎระเบียบวินัยที่เข้มงวดสำหรับการพักผ่อน. (The boarding school enforces strict disciplinary rules for curfews.)',
			synonym: ['กวดขัน (stringent)'],
			antonym: ['ผ่อนปรน (lenient)'],
		},
		{
			word: 'ใจเย็น',
			translation: 'calm',
			pronunciation: 'jai-YEN',
			example:
				'เขาเป็นคนมีสติและใจเย็นเสมอแม้จะต้องเผชิญหน้ากับปัญหาเฉพาะหน้า. (He is always level-headed and calm even facing immediate crises.)',
			synonym: ['สุขุม (composed)'],
			antonym: ['ใจร้อน (impatient)'],
		},
		{
			word: 'ใจร้อน',
			translation: 'impatient',
			pronunciation: 'jai-RAWN',
			example:
				'อย่าเพิ่งใจร้อนตัดสินคนอื่นเพียงเพราะฟังความข้างเดียวมา. (Do not be impatient judging others after hearing only one side.)',
			synonym: ['วู่วาม (hot-headed)'],
			antonym: ['ใจเย็น (calm)'],
		},
		{
			word: 'เค็มจัด',
			translation: 'extremely salty',
			pronunciation: 'khem-JAT',
			example:
				'อย่าใส่น้ำปลามากเกินไปเพราะจะทำให้น้ำซุปเค็มจัด. (Do not add too much fish sauce because it makes the soup extremely salty.)',
			synonym: ['เค็มปี๋ (intensely salty)'],
			antonym: ['จืดสนิท (completely bland)'],
		},
		{
			word: 'จืดสนิท',
			translation: 'completely bland',
			pronunciation: 'jeut-sa-NIT',
			example:
				'แกงจืดชามนี้ลืมใส่เกลือทำให้มีรสชาติจืดสนิท. (This soup bowl forgot salt, leaving it with a completely bland taste.)',
			synonym: ['ไร้รสชาติ (flavorless)'],
			antonym: ['เค็มจัด (extremely salty)'],
		},
		{
			word: 'เหนียวแน่น',
			translation: 'solid',
			pronunciation: 'neeaw-NAEN',
			example:
				'ความผูกพันในครอบครัวยังคงอบอุ่นและเหนียวแน่นเสมอ. (Bonds within the family remain warm and solid always.)',
			synonym: ['แน่นแฟ้น (tight-knit)'],
			antonym: ['เปราะบาง (fragile)'],
		},
		{
			word: 'เปราะบาง',
			translation: 'fragile',
			pronunciation: 'bpraw-BAANG',
			example:
				'แก้วคริสตัลใบนี้เนื้อบางมากและเปราะบางต่อแรงกระแทก. (This crystal glass is very thin and fragile against impacts.)',
			synonym: ['แตกหักง่าย (brittle)'],
			antonym: ['เหนียวแน่น (solid)'],
		},
		{
			word: 'เงียบเชียบ',
			translation: 'dead silent',
			pronunciation: 'ngeeap-CHEEAP',
			example:
				'ทางเดินในอาคารเรียนยามค่ำคืนดูเงียบเชียบไร้ผู้คน. (The school building hallways at night look dead silent, devoid of people.)',
			synonym: ['เงียบกริบ (hushed)'],
			antonym: ['อึกทึก (tumultuous)'],
		},
		{
			word: 'อึกทึก',
			translation: 'noisy',
			pronunciation: 'euk-ka-THEUK',
			example:
				'บริเวณตลาดสดตอนเช้าเต็มไปด้วยเสียงพูดคุยอึกทึกครึกโครม. (The morning market area is packed with noisy, bustling chatter.)',
			synonym: ['จอแจ (clamorous)'],
			antonym: ['เงียบเชียบ (dead silent)'],
		},
		{
			word: 'สดชื่น',
			translation: 'refreshed',
			pronunciation: 'sot-CHEUN',
			example:
				'การได้ล้างหน้าด้วยน้ำเย็นยามเช้าทำให้รู้สึกสดชื่นกระปรี้กระเปร่า. (Washing the face with cool water at dawn makes one feel refreshed.)',
			synonym: ['กระปรี้กระเปร่า (reinvigorated)'],
			antonym: ['เหน็ดเหนื่อย (exhausted)'],
		},
		{
			word: 'เหน็ดเหนื่อย',
			translation: 'exhausted',
			pronunciation: 'net-NEUAI',
			example:
				'กรรมกรพักดื่มน้ำคลายร้อนหลังตรากตรำทำงานอย่างเหน็ดเหนื่อย. (Laborers pause to drink water cooling down after working in an exhausted state.)',
			synonym: ['อ่อนล้า (fatigued)'],
			antonym: ['สดชื่น (refreshed)'],
		},
		{
			word: 'แห้งแล้ง',
			translation: 'arid',
			pronunciation: 'haeng-LAENG',
			example:
				'ผืนดินแถบนี้แตกระแหงเพราะสภาพอากาศแห้งแล้งมานานหลายเดือน. (Ground in this region cracked open because of arid weather lasting months.)',
			synonym: ['กันดาร (parched)'],
			antonym: ['ชุ่มชื้น (humid)'],
		},
		{
			word: 'ชุ่มชื้น',
			translation: 'moist',
			pronunciation: 'choom-CHEUN',
			example:
				'ผืนป่าต้นน้ำยังคงเขียวขจีและมีความชุ่มชื้นตลอดทั้งปี. (Upstream forest canopies stay lush green and moist throughout the year.)',
			synonym: ['ชุ่มฉ่ำ (dewy)'],
			antonym: ['แห้งแล้ง (arid)'],
		},
		{
			word: 'มุ่งมั่น',
			translation: 'determined',
			pronunciation: 'moong-MAN',
			example:
				'เด็กหนุ่มมีแววตามุ่งมั่นที่จะสอบเข้ามหาวิทยาลัยให้ได้. (The young lad carries determined eyes to pass university exams.)',
			synonym: ['แน่วแน่ (resolute)'],
			antonym: ['ท้อแท้ (demoralized)'],
		},
		{
			word: 'คลุมเครือ',
			translation: 'vague',
			pronunciation: 'khloom-KHRUEA',
			example:
				'ข้อความในประกาศยังคงมีความหมายคลุมเครือจนคนสับสน. (Wording in the bulletin remains vague in meaning until people get confused.)',
			synonym: ['ไม่ชัดเจน (ambiguous)'],
			antonym: ['ชัดเจน (clear)'],
		},
		{
			word: 'แคบลง',
			translation: 'narrower',
			pronunciation: 'khaap-LONG',
			example:
				'ถนนคอนกรีตเริ่มแคบลงเมื่อรถแล่นเข้าสู่เขตแนวเขา. (The concrete road grew narrower as vehicles drove into mountain passes.)',
			synonym: [],
			antonym: ['กว้างขึ้น (wider)'],
		},
		{
			word: 'กว้างขึ้น',
			translation: 'wider',
			pronunciation: 'gwaang-KHEUN',
			example:
				'ช่างขยายแนวสะพานข้ามคลองให้กว้างขึ้นเพื่อรองรับรถสองคัน. (Crews widened the canal bridge wider to accommodate two passing cars.)',
			synonym: [],
			antonym: ['แคบลง (narrower)'],
		},
		{
			word: 'ราบเรียบ',
			translation: 'flat',
			pronunciation: 'raap-REEAP',
			example:
				'ผิวน้ำในสระว่ายน้ำนิ่งสงบและราบเรียบเหมือนกระจกเงา. (Water surfaces in the swimming pool lay tranquil and flat like looking-glasses.)',
			synonym: ['เรียบเนียน (smooth)'],
			antonym: ['ขรุขระ (rough)'],
		},
	],
	adverbs: [
		{
			word: 'ตอนนี้',
			translation: 'now',
			pronunciation: 'dtaawn-NEE',
			example:
				'ตอนนี้ฝนเริ่มหยุดตกและท้องฟ้าเริ่มกลับมาสว่างสดใสอีกครั้ง. (Now the rain has stopped and skies turn bright once more.)',
			synonym: ['ขณะนี้ (presently)'],
			antonym: [],
		},
		{
			word: 'เสมอ',
			translation: 'always',
			pronunciation: 'sa-MOE',
			example:
				'แม่จะคอยยืนส่งลูกๆ ที่หน้าประตูรั้วบ้านตอนเช้าเสมอ. (Mother will always stand waving goodbye to the kids at the gate.)',
			synonym: ['ตลอดเวลา (consistently)'],
			antonym: ['ไม่เคย (never)'],
		},
		{
			word: 'ไม่เคย',
			translation: 'never',
			pronunciation: 'mai-KHOEI',
			example:
				"เขาไม่เคยลืมวันเกิดของคนในครอบครัวเลยแม้แต่ปีเดียว. (He has never forgotten family members' birthdays, not even once.)",
			synonym: [],
			antonym: ['เสมอ (always)'],
		},
		{
			word: 'สาย',
			translation: 'late',
			pronunciation: 'SAAI',
			example:
				'วันนี้นักเรียนตื่นสายจึงต้องรีบวิ่งไปขึ้นรถโรงเรียนให้ทัน. (The pupil woke up late today and had to sprint to catch the bus.)',
			synonym: ['ล่าช้า (tardy)'],
			antonym: ['เช้า (early)'],
		},
		{
			word: 'เช้า',
			translation: 'early',
			pronunciation: 'CHAAO',
			example:
				'คนสวนตื่นมาทำงานตั้งแต่เช้าตรู่ก่อนที่แดดจะเริ่มส่องร้อน. (The gardener woke up early at dawn before the sun grew hot.)',
			synonym: ['เช้าตรู่ (early morning)'],
			antonym: ['สาย (late)'],
		},
		{
			word: 'เมื่อวาน',
			translation: 'yesterday',
			pronunciation: 'meua-WAAN',
			example:
				'เมื่อวานมีฝนตกหนักจนน้ำท่วมขังถนนสายหลัก. (Yesterday heavy rain fell until water flooded the main road.)',
			synonym: ['วานนี้ (yesterday formal)'],
			antonym: ['พรุ่งนี้ (tomorrow)'],
		},
		{
			word: 'วันนี้',
			translation: 'today',
			pronunciation: 'wan-NEE',
			example:
				'วันนี้อากาศปลอดโปร่งเหมาะกับการออกไปเดินเล่นในสวน. (Today the weather is clear, suitable for a walk in the park.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'พรุ่งนี้',
			translation: 'tomorrow',
			pronunciation: 'phroong-NEE',
			example:
				'พรุ่งนี้โรงเรียนจะปิดทำการเนื่องในวันหยุดราชการ. (Tomorrow the school will be closed due to an official holiday.)',
			synonym: [],
			antonym: ['เมื่อวาน (yesterday)'],
		},
		{
			word: 'แล้ว',
			translation: 'already',
			pronunciation: 'LAAEO',
			example:
				'ฉันรับประทานอาหารกลางวันเสร็จเรียบร้อยแล้ว. (I have already finished having lunch.)',
			synonym: [],
			antonym: ['ยัง (yet)'],
		},
		{
			word: 'ยัง',
			translation: 'still',
			pronunciation: 'YANG',
			example:
				'เขายังคงนั่งอ่านหนังสืออยู่ในห้องสมุดจนถึงบัดนี้. (He is still sitting and reading books in the library until now.)',
			synonym: ['ยังคง (still continuously)'],
			antonym: [],
		},
		{
			word: 'ก่อน',
			translation: 'before',
			pronunciation: 'GAWN',
			example:
				'กรุณาล้างมือให้สะอาดก่อนรับประทานอาหารทุกครั้ง. (Please wash your hands clean before eating meals every time.)',
			synonym: [],
			antonym: ['หลัง (after)'],
		},
		{
			word: 'หลัง',
			translation: 'after',
			pronunciation: 'LANG',
			example:
				'พวกเราจะออกไปเดินย่อยอาหารหลังมื้อค่ำเสร็จสิ้น. (We will go out for a digestive walk after dinner ends.)',
			synonym: ['ภายหลัง (afterward)'],
			antonym: ['ก่อน (before)'],
		},
		{
			word: 'แล้วก็',
			translation: 'then',
			pronunciation: 'laaeo-GAW',
			example:
				'เขาทำการบ้านเสร็จแล้วก็ออกไปวิ่งเล่นกับเพื่อน. (He finished homework and then went out to play with friends.)',
			synonym: ['ต่อมา (subsequently)'],
			antonym: [],
		},
		{
			word: 'งั้น',
			translation: 'in that case',
			pronunciation: 'NGAN',
			example:
				'ถ้าฝนจะตก งั้นเราพักรออยู่ที่นี่ก่อนเถอะ. (If it is going to rain, in that case let us wait here first.)',
			synonym: ['ถ้าอย่างนั้น (if so)'],
			antonym: [],
		},
		{
			word: 'เร็วๆนี้',
			translation: 'soon',
			pronunciation: 'reo-reo-NEE',
			example:
				'ภาพยนตร์เรื่องใหม่นี้จะเข้าฉายในโรงเร็วๆนี้. (This new movie will be shown in cinemas soon.)',
			synonym: ['ในไม่ช้า (shortly)'],
			antonym: [],
		},
		{
			word: 'ก็ไม่',
			translation: 'neither',
			pronunciation: 'gaw-MAI',
			example:
				'ฉันไม่ได้ชวนเขาและเขาก็ไม่ติดต่อกลับมาเช่นกัน. (I did not invite him, and neither did he contact back.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ด้วย',
			translation: 'also',
			pronunciation: 'DUAI',
			example:
				'พี่ชายไปซื้อของที่ตลาดและฉันขอไปด้วยคน. (Older brother went shopping at the market, and I asked to go also.)',
			synonym: ['เช่นกัน (likewise)'],
			antonym: [],
		},
		{
			word: 'อย่างนี้',
			translation: 'thus',
			pronunciation: 'yaang-NEE',
			example:
				'ถ้าทำตามขั้นตอนอย่างนี้งานจะเสร็จเร็วขึ้นมาก. (If you follow steps thus, the work will finish much faster.)',
			synonym: ['เช่นนี้ (like this)'],
			antonym: [],
		},
		{
			word: 'ดี',
			translation: 'well',
			pronunciation: 'DEE',
			example:
				'เครื่องยนต์ของรถคันเก่านี้ยังคงทำงานได้ดีเยี่ยม. (The engine of this old car still works extremely well.)',
			synonym: ['ราบรื่น (smoothly)'],
			antonym: ['แย่ (badly)'],
		},
		{
			word: 'แย่',
			translation: 'badly',
			pronunciation: 'YAAE',
			example:
				'ผลการทดสอบออกมาแย่เพราะเขาไม่ได้เตรียมตัวมา. (The test result turned out badly because he did not prepare.)',
			synonym: ['ย่ำแย่ (poorly)'],
			antonym: ['ดี (well)'],
		},
		{
			word: 'ใกล้',
			translation: 'near',
			pronunciation: 'GLAI',
			example:
				'บ้านพักของฉันตั้งอยู่ใกล้กับสถานีรถไฟใต้ดินมาก. (My residence is situated very near the subway station.)',
			synonym: ['ประชิด (close by)'],
			antonym: ['ไกล (far)'],
		},
		{
			word: 'ไกล',
			translation: 'far',
			pronunciation: 'GLAI',
			example:
				'หมู่บ้านบนภูเขาอยู่ห่างไกลจากตัวเมืองใหญ่หลายร้อยกิโลเมตร. (The mountain village is located far from the big city by hundreds of kilometers.)',
			synonym: ['ห่างไกล (distant)'],
			antonym: ['ใกล้ (near)'],
		},
		{
			word: 'มาก',
			translation: 'a lot',
			pronunciation: 'MAAK',
			example:
				'วันนี้มีลูกค้าแวะเวียนมาอุดหนุนที่ร้านมากเป็นพิเศษ. (Today there are customers stopping by to support the shop a lot especially.)',
			synonym: ['เยอะ (plenty)'],
			antonym: ['น้อย (a little)'],
		},
		{
			word: 'น้อย',
			translation: 'a little',
			pronunciation: 'NAWY',
			example:
				'เขากินข้าวน้อยลงเพราะกำลังรู้สึกไม่ค่อยสบาย. (He ate a little less food because he was feeling slightly unwell.)',
			synonym: ['เล็กน้อย (slightly)'],
			antonym: ['มาก (a lot)'],
		},
		{
			word: 'มากกว่า',
			translation: 'more',
			pronunciation: 'maak-GWAA',
			example:
				'เขาชอบดื่มชาเขียวร้อนมากกว่ากาแฟดำเข้มข้น. (He prefers drinking hot green tea more than strong black coffee.)',
			synonym: [],
			antonym: ['น้อยกว่า (less)'],
		},
		{
			word: 'น้อยกว่า',
			translation: 'less',
			pronunciation: 'nawy-GWAA',
			example:
				'รถยนต์รุ่นใหม่นี้ใช้น้ำมันน้อยกว่ารุ่นเดิมเกือบครึ่ง. (This new car model consumes less fuel than the old model by almost half.)',
			synonym: [],
			antonym: ['มากกว่า (more)'],
		},
		{
			word: 'มากเกินไป',
			translation: 'too much',
			pronunciation: 'maak-goen-PAI',
			example:
				'อย่าเติมเกลือลงในแกงมากเกินไปเพราะจะเค็มจัด. (Do not put too much salt into the curry because it will taste overly salty.)',
			synonym: ['ล้นหลาม (excessively)'],
			antonym: [],
		},
		{
			word: 'พอ',
			translation: 'enough',
			pronunciation: 'PHAW',
			example:
				'เงินสดที่พกติดตัวมามีจำนวนพอสำหรับค่าอาหารกลางวัน. (The cash carried along is enough for the lunch cost.)',
			synonym: ['เพียงพอ (sufficiently)'],
			antonym: ['ขาดแคลน (insufficiently)'],
		},
		{
			word: 'ประมาณ',
			translation: 'approximately',
			pronunciation: 'pra-MAAN',
			example:
				'การเดินทางโดยรถไฟใช้เวลาประมาณสองชั่วโมงครึ่ง. (Traveling by train takes approximately two and a half hours.)',
			synonym: ['ราวๆ (roughly)'],
			antonym: ['แน่นอน (exactly)'],
		},
		{
			word: 'อย่างแน่นอน',
			translation: 'definitely',
			pronunciation: 'yaang-nae-NAWN',
			example:
				'ทีมของเราจะคว้าชัยชนะในการแข่งขันรอบนี้อย่างแน่นอน. (Our team will win the match this round definitely.)',
			synonym: ['มั่นเหมาะ (certainly)'],
			antonym: [],
		},
		{
			word: 'เพียง',
			translation: 'only',
			pronunciation: 'PHEEANG',
			example:
				'เขาขอเวลาเตรียมตัวนำเสนอผลงานเพียงสิบนาทีเท่านั้น. (He asked for only ten minutes to prepare his presentation.)',
			synonym: ['แค่ (just)'],
			antonym: [],
		},
		{
			word: 'อย่างเดียว',
			translation: 'simply',
			pronunciation: 'yaang-DEEAW',
			example:
				'การฝึกซ้อมอย่างเดียวไม่พอ ต้องมีความเข้าใจร่วมด้วย. (Simply practicing alone is not enough; there must also be understanding.)',
			synonym: ['เท่านั้น (solely)'],
			antonym: [],
		},
		{
			word: 'อย่างชัดเจน',
			translation: 'clearly',
			pronunciation: 'yaang-chat-JEEN',
			example:
				'ครูเขียนคำอธิบายบนกระดานดำให้นักเรียนอ่านอย่างชัดเจน. (The teacher wrote explanations on the blackboard clearly for students.)',
			synonym: ['แจ่มแจ้ง (distinctly)'],
			antonym: ['คลุมเครือ (vaguely)'],
		},
		{
			word: 'อย่างรวดเร็ว',
			translation: 'quickly',
			pronunciation: 'yaang-ruat-REO',
			example:
				'เจ้าหน้าที่ดับเพลิงควบคุมไฟป่าได้อย่างรวดเร็วก่อนลุกลาม. (Firefighters controlled the forest fire quickly before it spread.)',
			synonym: ['ว่องไว (swiftly)'],
			antonym: ['อย่างช้าๆ (slowly)'],
		},
		{
			word: 'อย่างช้าๆ',
			translation: 'slowly',
			pronunciation: 'yaang-chaa-CHAA',
			example:
				'คนขับรถชะลอความเร็วแล่นผ่านชุมชนอย่างช้าๆ. (The driver slowed down, cruising through the community slowly.)',
			synonym: ['เชื่องช้า (sluggishly)'],
			antonym: ['อย่างรวดเร็ว (quickly)'],
		},
		{
			word: 'อย่างเป็นไปได้',
			translation: 'possibly',
			pronunciation: 'yaang-bpen-pai-DAI',
			example:
				'การประชุมอาจจะเลื่อนเวลาออกไปก่อนอย่างเป็นไปได้. (The meeting could possibly be postponed for the time being.)',
			synonym: ['อาจจะ (perchance)'],
			antonym: [],
		},
		{
			word: 'น่าจะ',
			translation: 'probably',
			pronunciation: 'naa-JA',
			example:
				'พัสดุที่คุณสั่งซื้อน่าจะมาส่งถึงบ้านในวันพรุ่งนี้. (The parcel you ordered will probably arrive at home tomorrow.)',
			synonym: ['คงจะ (likely)'],
			antonym: [],
		},
		{
			word: 'แน่นอน',
			translation: 'definitely',
			pronunciation: 'nae-NAWN',
			example:
				'เขามาร่วมงานเลี้ยงสังสรรค์ฉลองปีใหม่นี้แน่นอน. (He will attend this New Year gathering party definitely.)',
			synonym: ['แน่แท้ (unquestionably)'],
			antonym: ['ไม่แน่ (uncertainly)'],
		},
		{
			word: 'โชคร้าย',
			translation: 'unfortunately',
			pronunciation: 'chohk-RAAI',
			example:
				'โชคร้ายที่ร้านเบเกอรี่เจ้าประจำปิดซ่อมแซมวันนี้. (Unfortunately, the regular bakery shop was closed for maintenance today.)',
			synonym: ['น่าเสียดาย (regrettably)'],
			antonym: ['โชคดี (fortunately)'],
		},
		{
			word: 'อย่างมีความสุข',
			translation: 'happily',
			pronunciation: 'yaang-mee-khwaam-SOOK',
			example:
				'ครอบครัวนั่งร่วมรับประทานอาหารค่ำอย่างมีความสุข. (The family sat dining together at dinner happily.)',
			synonym: ['รื่นรมย์ (joyfully)'],
			antonym: ['อย่างเศร้า (sadly)'],
		},
		{
			word: 'อย่างเศร้า',
			translation: 'sadly',
			pronunciation: 'yaang-SAO',
			example:
				'เขามองดูนกตัวน้อยที่บาดเจ็บบนพื้นดินอย่างเศร้าสร้อย. (He looked at the injured little bird on the ground sadly.)',
			synonym: ['โศกเศร้า (sorrowfully)'],
			antonym: ['อย่างมีความสุข (happily)'],
		},
		{
			word: 'ตามธรรมชาติ',
			translation: 'naturally',
			pronunciation: 'taam-tham-ma-CHAAT',
			example:
				'พืชพรรณเจริญเติบโตผลิดอกออกผลขึ้นมาตามธรรมชาติ. (Foliage grows and blossoms naturally.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'โดยเฉพาะ',
			translation: 'particularly',
			pronunciation: 'doy-cha-PHO',
			example:
				'ผลไม้เมืองร้อนได้รับความนิยมมากโดยเฉพาะมะม่วงสุก. (Tropical fruits are popular, particularly ripe mangoes.)',
			synonym: ['เจาะจง (specifically)'],
			antonym: [],
		},
		{
			word: 'บ่อย',
			translation: 'frequently',
			pronunciation: 'BAWY',
			example:
				'เขาแวะมาดื่มกาแฟและอ่านหนังสือที่ร้านนี้บ่อยมาก. (He stops by to drink coffee and read books at this shop frequently.)',
			synonym: ['เสมอๆ (often)'],
			antonym: ['นานๆ ครั้ง (rarely)'],
		},
		{
			word: 'ทุกวัน',
			translation: 'daily',
			pronunciation: 'thook-WAN',
			example:
				'คุณตาชอบเดินออกกำลังกายรอบสระน้ำในหมู่บ้านทุกวัน. (Grandfather likes walking for exercise around the pond daily.)',
			synonym: ['ประจำวัน (day-to-day)'],
			antonym: [],
		},
		{
			word: 'รายเดือน',
			translation: 'monthly',
			pronunciation: 'raai-DEUAN',
			example:
				'พนักงานบริษัทได้รับเงินเดือนและการจ่ายผลตอบแทนแบบรายเดือน. (Office staff receive salaries and compensation disbursements monthly.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ประจำปี',
			translation: 'annually',
			pronunciation: 'pra-jam-BPEE',
			example:
				'โรงเรียนจัดกิจกรรมแข่งขันกีฬาประจำปีช่วงฤดูหนาว. (The school holds its athletic games annually during winter.)',
			synonym: ['ทุกปี (yearly)'],
			antonym: [],
		},
		{
			word: 'อย่างสมบูรณ์',
			translation: 'completely',
			pronunciation: 'yaang-som-BOON',
			example:
				'งานก่อสร้างอาคารหลังใหม่แล้วเสร็จลงอย่างสมบูรณ์. (Construction of the new building was completed completely.)',
			synonym: ['เบ็ดเสร็จ (thoroughly)'],
			antonym: [],
		},
		{
			word: 'โดยสิ้นเชิง',
			translation: 'totally',
			pronunciation: 'doy-sin-CHOENG',
			example:
				'ความคิดเห็นของเขาทั้งสองคนขัดแย้งกันโดยสิ้นเชิง. (The viewpoints of both people contradicted each other totally.)',
			synonym: ['อย่างแท้จริง (entirely)'],
			antonym: [],
		},
		{
			word: 'โดยเฉพาะอย่างยิ่ง',
			translation: 'especially',
			pronunciation: 'doy-cha-pho-yaang-YING',
			example:
				'เราต้องระวังสุขภาพโดยเฉพาะอย่างยิ่งในช่วงฤดูฝน. (We must watch our health, especially during the rainy season.)',
			synonym: ['ยิ่งไปกว่านั้น (furthermore)'],
			antonym: [],
		},
		{
			word: 'โดยปกติ',
			translation: 'normally',
			pronunciation: 'doy-bpa-ga-DTI',
			example:
				'โดยปกติแล้วเขาจะตื่นนอนตอนหกโมงเช้าเพื่อมาวิ่ง. (Normally he will wake up at six in the morning to run.)',
			synonym: ['ตามธรรมดา (ordinarily)'],
			antonym: [],
		},
		{
			word: 'โดยทั่วไป',
			translation: 'generally',
			pronunciation: 'doy-thua-PAI',
			example:
				'โดยทั่วไปสภาพอากาศแถบนี้มักจะมีฝนตกชุกเกือบทั้งปี. (Generally the weather in this belt tends to have heavy rain almost all year.)',
			synonym: ['ส่วนใหญ่ (in general)'],
			antonym: [],
		},
		{
			word: 'มักจะ',
			translation: 'usually',
			pronunciation: 'mak-JA',
			example:
				'น้องสาวมักจะเปิดวิทยุฟังเพลงเบาๆ ระหว่างทำการบ้าน. (Little sister usually turns on the radio to listen to music while doing homework.)',
			synonym: ['มัก (customarily)'],
			antonym: [],
		},
		{
			word: 'ส่วนใหญ่',
			translation: 'mainly',
			pronunciation: 'suan-YAI',
			example:
				'นักท่องเที่ยวส่วนใหญ่ชอบเดินทางมาชมวัดวาอารามเก่าแก่. (Tourists mainly like traveling to admire ancient temples.)',
			synonym: ['เป็นหลัก (predominantly)'],
			antonym: [],
		},
		{
			word: 'โชคดี',
			translation: 'fortunately',
			pronunciation: 'chohk-DEE',
			example:
				'โชคดีที่เราพกร่มติดตัวมาด้วยก่อนที่พายุฝนจะพัดกระหน่ำ. (Fortunately we brought umbrellas along before the rainstorm hammered.)',
			synonym: ['เคราะห์ดี (by good fortune)'],
			antonym: ['โชคร้าย (unfortunately)'],
		},
		{
			word: 'น่าเสียดาย',
			translation: 'unfortunately',
			pronunciation: 'naa-seea-DAAI',
			example:
				'น่าเสียดายที่ตั๋วคอนเสิร์ตการกุศลขายหมดเกลี้ยงตั้งแต่เช้า. (Unfortunately charity concert tickets were sold out completely since morning.)',
			synonym: ['น่าเสียใจ (regrettably)'],
			antonym: [],
		},
		{
			word: 'ทันที',
			translation: 'immediately',
			pronunciation: 'than-THEE',
			example:
				'หน่วยกู้ภัยรุดไปยังจุดเกิดเหตุทันทีหลังจากรับแจ้งทางโทรศัพท์. (Rescue units rushed to the accident scene immediately after receiving the call.)',
			synonym: ['ฉับพลัน (instantly)'],
			antonym: [],
		},
		{
			word: 'ในที่สุด',
			translation: 'finally',
			pronunciation: 'nai-thee-SOOT',
			example:
				"ในที่สุดเขาก็สามารถสอบผ่านใบขับขี่รถยนต์ได้สำเร็จ. (Finally he was able to pass his driver's license test successfully.)",
			synonym: ['ท้ายสุด (at last)'],
			antonym: [],
		},
		{
			word: 'พื้นฐาน',
			translation: 'basically',
			pronunciation: 'pheun-THAAN',
			example:
				'โดยพื้นฐานโปรแกรมนี้ออกแบบมาเพื่อให้ใช้งานได้ง่ายทุกคน. (Basically, this program was designed so everyone can use it easily.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อย่างแม่นยำ',
			translation: 'accurately',
			pronunciation: 'yaang-maen-YAM',
			example:
				'นาฬิกาดิจิทัลเรือนนี้บอกเวลาได้อย่างแม่นยำทุกวินาที. (This digital clock tells time accurately every single second.)',
			synonym: ['เที่ยงตรง (precisely)'],
			antonym: [],
		},
		{
			word: 'โดยเปรียบเทียบ',
			translation: 'relatively',
			pronunciation: 'doy-bpreeap-THEEAP',
			example:
				'ค่าครองชีพในเมืองนี้ยังนับว่าถูกโดยเปรียบเทียบกับเมืองหลวง. (Living costs in this town are considered cheap relatively compared to the capital.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อย่างเป็นวิทยาศาสตร์',
			translation: 'scientifically',
			pronunciation: 'yaang-bpen-wit-tha-yaa-SAAT',
			example:
				'ข้อมูลผลการทดลองนี้สามารถอธิบายได้อย่างเป็นวิทยาศาสตร์. (This experiment data can be explained scientifically.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อย่างเหมาะสม',
			translation: 'adequately',
			pronunciation: 'yaang-maw-SOM',
			example:
				'จัดสรรเวลาทำงานและพักผ่อนในแต่ละวันอย่างเหมาะสม. (Allocate work and rest hours in each day adequately.)',
			synonym: ['พอดี (suitably)'],
			antonym: [],
		},
		{
			word: 'พร้อมกัน',
			translation: 'simultaneously',
			pronunciation: 'phrawm-GAN',
			example:
				'นักเรียนทุกคนในห้องยืนขึ้นทำความเคารพครูพร้อมกัน. (Every student in the classroom stood up greeting the teacher simultaneously.)',
			synonym: ['พร้อมเพรียง (in unison)'],
			antonym: [],
		},
		{
			word: 'แม้แต่',
			translation: 'even',
			pronunciation: 'mae-DTAE',
			example:
				'ในยามวิกฤต แม้แต่เด็กเล็กก็ยังช่วยงานเก็บของเล็กๆ น้อยๆ. (In times of crisis, even small children still help tidy up bits of belongings.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อย่างเท่าเทียม',
			translation: 'equally',
			pronunciation: 'yaang-thao-THEEAM',
			example:
				'แบ่งผลกำไรจากการทำธุรกิจให้หุ้นส่วนทุกคนอย่างเท่าเทียม. (Distribute business profits to all partners equally.)',
			synonym: ['เสมอภาค (evenly)'],
			antonym: [],
		},
		{
			word: 'อย่างต่อเนื่อง',
			translation: 'constantly',
			pronunciation: 'yaang-dtor-NEUANG',
			example:
				'กระแสน้ำในแม่น้ำยังคงไหลลงสู่ทะเลอย่างต่อเนื่องตลอดวัน. (Currents in the river constantly flow into the ocean all day.)',
			synonym: ['สม่ำเสมอ (incessantly)'],
			antonym: [],
		},
		{
			word: 'อย่างจำเป็น',
			translation: 'essentially',
			pronunciation: 'yaang-jam-BPEN',
			example:
				'เอกสารสำคัญเหล่านี้ต้องเก็บรักษาไว้ในตู้เซฟอย่างจำเป็น. (These vital documents must essentially be kept inside the safe.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'จริงๆ',
			translation: 'really',
			pronunciation: 'jing-JING',
			example:
				'อาหารจานนี้ปรุงรสชาติได้ถูกปากและอร่อยจริงๆ. (This food plate was seasoned suitably to taste and was really delicious.)',
			synonym: ['แท้จริง (truly)'],
			antonym: [],
		},
		{
			word: 'ในทางบวก',
			translation: 'positively',
			pronunciation: 'nai-thaang-BUAK',
			example:
				'การมองโลกในทางบวกช่วยเสริมสร้างพลังใจให้ฟันฝ่าอุปสรรค. (Looking at the world positively helps build inner resolve to overcome hurdles.)',
			synonym: [],
			antonym: ['ในทางลบ (negatively)'],
		},
		{
			word: 'ในทางลบ',
			translation: 'negatively',
			pronunciation: 'nai-thaang-LOP',
			example:
				'ความเครียดสะสมส่งผลกระทบในทางลบต่อประสิทธิภาพการทำงาน. (Accumulated stress impacts work performance negatively.)',
			synonym: [],
			antonym: ['ในทางบวก (positively)'],
		},
		{
			word: 'ทางกายภาพ',
			translation: 'physically',
			pronunciation: 'thaang-gaai-ya-PHAAP',
			example:
				'การยกของหนักบ่อยๆ อาจทำให้บาดเจ็บทางกายภาพได้ง่าย. (Lifting heavy loads frequently can easily cause physical injury.)',
			synonym: [],
			antonym: ['ทางจิตใจ (mentally)'],
		},
		{
			word: 'ทางจิตใจ',
			translation: 'mentally',
			pronunciation: 'thaang-jit-JAI',
			example:
				'การได้นั่งสมาธิใต้ต้นไม้ช่วยสร้างความสงบสุขทางจิตใจ. (Meditating under shady trees brings peace mentally.)',
			synonym: [],
			antonym: ['ทางกายภาพ (physically)'],
		},
		{
			word: 'ทางอารมณ์',
			translation: 'emotionally',
			pronunciation: 'thaang-aa-ROM',
			example:
				'การฟังเพลงบรรเลงหวานซึ้งช่วยสร้างความผ่อนคลายทางอารมณ์. (Listening to mellow instrumental music helps relax emotionally.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อย่างสร้างสรรค์',
			translation: 'creatively',
			pronunciation: 'yaang-saang-SAN',
			example:
				'นักออกแบบคิดค้นและแก้ปัญหาพื้นที่แคบได้อย่างสร้างสรรค์. (The designer engineered solutions for cramped spaces creatively.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'บางครั้ง',
			translation: 'sometimes',
			pronunciation: 'baang-KHRANG',
			example:
				'บางครั้งเขาก็เลือกเดินเท้ากลับบ้านแทนการนั่งรถโดยสาร. (Sometimes he chooses to walk back home instead of taking the bus.)',
			synonym: ['เป็นครั้งคราว (occasionally)'],
			antonym: ['เสมอ (always)'],
		},
		{
			word: 'ค่อนข้าง',
			translation: 'quite',
			pronunciation: 'khawn-KHAANG',
			example:
				'อากาศตอนดึกบนยอดดอยค่อนข้างเย็นจนต้องใส่เสื้อกันหนาว. (The late-night air on the mountain peak is quite chilly, requiring a jacket.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แทบจะไม่',
			translation: 'hardly',
			pronunciation: 'thaep-ja-MAI',
			example:
				'เขาแทบจะไม่พูดคุยอะไรกับใครเลยเพราะกำลังมีสมาธิทำงาน. (He hardly said anything to anyone because he was focused on work.)',
			synonym: ['แทบไม่ (scarcely)'],
			antonym: [],
		},
		{
			word: 'เกือบจะ',
			translation: 'almost',
			pronunciation: 'geuap-JA',
			example:
				'นักวิ่งเร่งฝีเท้าจนเกือบจะแตะเส้นชัยเป็นคนแรกของแถว. (The runner accelerated his pace until he almost crossed the finish line first.)',
			synonym: ['จวนเจียน (nearly)'],
			antonym: [],
		},
		{
			word: 'ข้างใน',
			translation: 'inside',
			pronunciation: 'khaang-NAI',
			example:
				'กรุณารออยู่ข้างในห้องรับแขกเพื่อหลบละอองฝนด้านนอก. (Please wait inside the parlor room to avoid the rain showers outside.)',
			synonym: ['ภายใน (within)'],
			antonym: ['ข้างนอก (outside)'],
		},
		{
			word: 'ข้างนอก',
			translation: 'outside',
			pronunciation: 'khaang-NAWK',
			example:
				'เด็กๆ วิ่งเล่นเตะฟุตบอลกันอย่างสนุกสนานอยู่ข้างนอกตัวบ้าน. (The children played soccer happily running outside the house.)',
			synonym: ['ภายนอก (outdoors)'],
			antonym: ['ข้างใน (inside)'],
		},
		{
			word: 'ที่นี่',
			translation: 'here',
			pronunciation: 'thee-NEE',
			example:
				'ครอบครัวของเราตั้งรกรากเปิดร้านขายของชำอยู่ที่นี่มาหลายปี. (Our family has settled down running a grocery store here for years.)',
			synonym: [],
			antonym: ['ที่นั่น (there)'],
		},
		{
			word: 'ที่นั่น',
			translation: 'there',
			pronunciation: 'thee-NAN',
			example:
				'เพื่อนๆ กำลังรวมตัวนั่งดื่มกาแฟคุยกันอยู่ที่นั่นตรงมุมห้อง. (Friends are gathering sipping coffee and chatting there at the room corner.)',
			synonym: [],
			antonym: ['ที่นี่ (here)'],
		},
		{
			word: 'ที่ไหนสักแห่ง',
			translation: 'somewhere',
			pronunciation: 'thee-nai-sak-HAENG',
			example:
				'ฉันน่าจะเผลอลืมกุญแจรถวางไว้ที่ไหนสักแห่งในห้องนั่งเล่น. (I might have accidentally left the car key somewhere in the living room.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ทุกที่',
			translation: 'everywhere',
			pronunciation: 'thook-THEE',
			example:
				'ดอกไม้ป่าสีเหลืองสดใสบานสะพรั่งอยู่ทุกที่ตามริมเนินเขา. (Bright yellow wildflowers blossom everywhere along the hillsides.)',
			synonym: ['ทั่วทุกแห่ง (all over)'],
			antonym: [],
		},
		{
			word: 'ล่วงหน้า',
			translation: 'in advance',
			pronunciation: 'luang-NAA',
			example:
				'นักท่องเที่ยวจองห้องพักโรงแรมสำหรับทริปนี้ล่วงหน้าสามเดือน. (Tourists booked hotel rooms for this trip three months in advance.)',
			synonym: ['ก่อนกำหนด (beforehand)'],
			antonym: [],
		},
		{
			word: 'บ่อยครั้ง',
			translation: 'often',
			pronunciation: 'bawy-KHRANG',
			example:
				'การนั่งทำงานหน้าคอมพิวเตอร์ติดต่อกันนานทำให้ปวดหลังบ่อยครั้ง. (Working before computers continuously causes back pains often.)',
			synonym: ['ถี่ (frequently)'],
			antonym: ['นานๆ ครั้ง (rarely)'],
		},
		{
			word: 'นานๆ ครั้ง',
			translation: 'rarely',
			pronunciation: 'naan-naan-KHRANG',
			example:
				'นานๆ ครั้งพวกเราถึงจะได้มีโอกาสนัดรวมรุ่นทานข้าวด้วยกัน. (Rarely do we get the chance to meet up for alumni dinners together.)',
			synonym: ['แทบจะไม่ (seldom)'],
			antonym: ['บ่อยครั้ง (often)'],
		},
		{
			word: 'เป็นครั้งคราว',
			translation: 'occasionally',
			pronunciation: 'bpen-khrang-KHRAAO',
			example:
				'เขาชอบออกไปนั่งตกปลาริมแม่น้ำเป็นครั้งคราวช่วงวันหยุด. (He likes going out to fish by the river occasionally on weekends.)',
			synonym: ['บางคราว (periodically)'],
			antonym: ['ประจำ (regularly)'],
		},
		{
			word: 'ทันท่วงที',
			translation: 'on time',
			pronunciation: 'than-thuang-THEE',
			example:
				'หน่วยกู้ภัยนำส่งผู้บาดเจ็บถึงมือแพทย์ได้อย่างทันท่วงที. (The rescue team transported the injured to doctors on time.)',
			synonym: ['ทันเวลา (punctually)'],
			antonym: ['ล่าช้า (tardily)'],
		},
		{
			word: 'ทีหลัง',
			translation: 'later',
			pronunciation: 'thee-LANG',
			example:
				'ถ้าตอนนี้ยังไม่ว่าง เดี๋ยวค่อยคุยเรื่องเอกสารกันทีหลัง. (If not free now, we can discuss the documents later.)',
			synonym: ['ภายหลัง (afterward)'],
			antonym: ['ก่อน (before)'],
		},
		{
			word: 'สักครู่',
			translation: 'for a moment',
			pronunciation: 'sak-KHROO',
			example:
				'กรุณารอสักครู่ เจ้าหน้าที่กำลังตรวจสอบเอกสารในระบบ. (Please wait for a moment; the officer is checking files in the system.)',
			synonym: ['ประเดี๋ยว (a short while)'],
			antonym: [],
		},
		{
			word: 'ชั่วคราว',
			translation: 'temporarily',
			pronunciation: 'chua-KHRAAO',
			example:
				'สะพานไม้ปิดซ่อมบำรุงชั่วคราวหลังได้รับผลกระทบจากน้ำหลาก. (The wooden bridge is closed temporarily after being hit by runoff.)',
			synonym: [],
			antonym: ['ถาวร (permanently)'],
		},
		{
			word: 'ถาวร',
			translation: 'permanently',
			pronunciation: 'thaa-WAWN',
			example:
				'เขาย้ายถิ่นฐานไปตั้งรกรากประกอบอาชีพที่ต่างจังหวัดอย่างถาวร. (He relocated to settle down and work in another province permanently.)',
			synonym: ['มั่นคง (enduringly)'],
			antonym: ['ชั่วคราว (temporarily)'],
		},
		{
			word: 'อย่างเงียบๆ',
			translation: 'quietly',
			pronunciation: 'yaang-ngeeap-NGEEAP',
			example:
				'นักเรียนค่อยๆ ปิดประตูห้องสมุดอย่างเงียบๆ เพื่อไม่ให้รบกวนคนอื่น. (The student shut the library door quietly so as not to disturb others.)',
			synonym: ['แผ่วเบา (softly)'],
			antonym: ['อย่างดัง (loudly)'],
		},
		{
			word: 'อย่างดัง',
			translation: 'loudly',
			pronunciation: 'yaang-DANG',
			example:
				'เสียงนาฬิกาปลุกหัวเตียงดังขึ้นอย่างดังในตอนเช้าตรู่. (The alarm clock by the bed rang loudly at dawn.)',
			synonym: ['สนั่นหวั่นไหว (resoundingly)'],
			antonym: ['อย่างเงียบๆ (quietly)'],
		},
		{
			word: 'อย่างระมัดระวัง',
			translation: 'carefully',
			pronunciation: 'yaang-ra-mat-ra-WANG',
			example:
				'พนักงานยกกล่องแจกันโบราณเดินขึ้นบันไดอย่างระมัดระวัง. (The clerk carried the box of antique vases up stairs carefully.)',
			synonym: ['รอบคอบ (cautiously)'],
			antonym: ['อย่างประมาท (carelessly)'],
		},
		{
			word: 'อย่างประมาท',
			translation: 'carelessly',
			pronunciation: 'yaang-pra-MAAT',
			example:
				'คนขับรถแล่นแซงทางโค้งอย่างประมาทจนเกือบเฉี่ยวชนคันอื่น. (The driver overtook on a curve carelessly, almost sideswiping cars.)',
			synonym: ['เลินเล่อ (heedlessly)'],
			antonym: ['อย่างระมัดระวัง (carefully)'],
		},
		{
			word: 'อย่างสุภาพ',
			translation: 'politely',
			pronunciation: 'yaang-soo-PHAAP',
			example:
				'บริกรหนุ่มค้อมศีรษะรับฟังคำสั่งอาหารของลูกค้าอย่างสุภาพ. (The young waiter bowed listening to customer orders politely.)',
			synonym: ['อ่อนน้อม (courteously)'],
			antonym: ['อย่างหยาบคาย (rudely)'],
		},
		{
			word: 'อย่างหยาบคาย',
			translation: 'rudely',
			pronunciation: 'yaang-yaap-KHAAI',
			example:
				'เขาถูกเชิญออกจากห้องประชุมเพราะพูดจาอย่างหยาบคายใส่ผู้อื่น. (He was asked to leave the meeting room because he spoke rudely to others.)',
			synonym: ['กักขฬะ (insolently)'],
			antonym: ['อย่างสุภาพ (politely)'],
		},
		{
			word: 'อย่างง่ายดาย',
			translation: 'easily',
			pronunciation: 'yaang-ngaai-DAAI',
			example:
				'นักกีฬาว่ายน้ำแตะขอบสระและคว้าชัยชนะมาได้อย่างง่ายดาย. (The swimmer touched the pool edge and claimed victory easily.)',
			synonym: ['คล่องแคล่ว (effortlessly)'],
			antonym: ['อย่างยากลำบาก (with difficulty)'],
		},
		{
			word: 'อย่างยากลำบาก',
			translation: 'with difficulty',
			pronunciation: 'yaang-yaak-lam-BAAK',
			example:
				'ชาวบ้านเดินแบกสัมภาระลุยโคลนขึ้นเขาไปอย่างยากลำบาก. (Villagers carried loads trudging mud uphill with difficulty.)',
			synonym: ['เหน็ดเหนื่อย (laboriously)'],
			antonym: ['อย่างง่ายดาย (easily)'],
		},
		{
			word: 'อย่างรุนแรง',
			translation: 'severely',
			pronunciation: 'yaang-roon-RAENG',
			example:
				'ลมพายุฝนพัดกระโชกเข้าใส่หลังคาบ้านอย่างรุนแรงเมื่อคืน. (The rainstorm wind gusted against the house roof severely last night.)',
			synonym: ['หนักหน่วง (intensely)'],
			antonym: ['อย่างอ่อนโยน (gently)'],
		},
		{
			word: 'อย่างอ่อนโยน',
			translation: 'gently',
			pronunciation: 'yaang-on-YOON',
			example:
				'แม่ประคองอุ้มลูกน้อยไว้ในอ้อมอกพร้อมตบหลังเบาๆ อย่างอ่อนโยน. (Mother cradled the infant in her arms, patting gently.)',
			synonym: ['ละมุนละไม (tenderly)'],
			antonym: ['อย่างรุนแรง (severely)'],
		},
		{
			word: 'อย่างจริงจัง',
			translation: 'seriously',
			pronunciation: 'yaang-jing-JANG',
			example:
				'ตำรวจเริ่มสืบสวนหาหลักฐานเกี่ยวกับคดีนี้อย่างจริงจัง. (The police began investigating for case evidence seriously.)',
			synonym: ['มุ่งมั่น (earnestly)'],
			antonym: [],
		},
		{
			word: 'อย่างลับๆ',
			translation: 'secretly',
			pronunciation: 'yaang-LAP-lap',
			example:
				'เพื่อนๆ ร่วมมือกันจัดเตรียมงานเลี้ยงวันเกิดเซอร์ไพรส์อย่างลับๆ. (Friends worked together preparing the surprise birthday party secretly.)',
			synonym: ['แอบ (covertly)'],
			antonym: ['อย่างเปิดเผย (openly)'],
		},
		{
			word: 'โดยบังเอิญ',
			translation: 'accidentally',
			pronunciation: 'doy-bang-OEN',
			example:
				'ฉันเดินไปพบเพื่อนร่วมชั้นเก่าที่ห้างสรรพสินค้าโดยบังเอิญ. (I ran into an old classmate at the mall accidentally.)',
			synonym: ['ไม่ได้ตั้งใจ (by chance)'],
			antonym: ['โดยเจตนา (intentionally)'],
		},
		{
			word: 'โดยเจตนา',
			translation: 'intentionally',
			pronunciation: 'doy-jee-dta-NAA',
			example:
				'เขาทำกระจกหน้าต่างแตกโดยเจตนาจึงต้องชดใช้ค่าเสียหาย. (He broke the window intentionally, so he had to pay damages.)',
			synonym: ['ตั้งใจ (deliberately)'],
			antonym: ['โดยบังเอิญ (accidentally)'],
		},
		{
			word: 'ค่อนข้างจะ',
			translation: 'somewhat',
			pronunciation: 'khawn-khaang-JA',
			example:
				'เส้นทางขึ้นยอดเขาชันและค่อนข้างจะลื่นหลังฝนตกใหม่ๆ. (The trail up the peak is steep and somewhat slippery right after rain.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ค่อนข้างมาก',
			translation: 'considerably',
			pronunciation: 'khawn-khaang-MAAK',
			example:
				'ยอดขายของร้านกาแฟปรับตัวเพิ่มขึ้นค่อนข้างมากในเดือนนี้. (Coffee shop sales figures adjusted upward considerably this month.)',
			synonym: ['อย่างยิ่ง (substantially)'],
			antonym: [],
		},
		{
			word: 'อย่างรวดเร็วปานสายฟ้า',
			translation: 'rapidly',
			pronunciation: 'yaang-ruat-reo-bpaan-saai-FAA',
			example:
				'เสือชีตาห์วิ่งพุ่งทะยานเข้าหาเป้าหมายอย่างรวดเร็วปานสายฟ้า. (The cheetah dashed toward its mark rapidly like lightning.)',
			synonym: ['ปราดเปรียว (swiftly)'],
			antonym: [],
		},
		{
			word: 'อย่างเป็นทางการ',
			translation: 'formally',
			pronunciation: 'yaang-bpen-thaang-GAAN',
			example:
				'บริษัทส่งหนังสือแจ้งกำหนดการเปิดสาขาใหม่แก่สื่ออย่างเป็นทางการ. (The firm sent formal letters announcing the new branch schedule.)',
			synonym: [],
			antonym: ['อย่างไม่เป็นทางการ (informally)'],
		},
		{
			word: 'อย่างไม่เป็นทางการ',
			translation: 'informally',
			pronunciation: 'yaang-mai-bpen-thaang-GAAN',
			example:
				'หัวหน้าทีมนัดลูกน้องมานั่งคุยแลกเปลี่ยนความคิดเห็นอย่างไม่เป็นทางการ. (The team lead gathered staff to chat and share thoughts informally.)',
			synonym: ['เป็นกันเอง (casually)'],
			antonym: ['อย่างเป็นทางการ (formally)'],
		},
		{
			word: 'อย่างอิสระ',
			translation: 'freely',
			pronunciation: 'yaang-it-sa-RA',
			example:
				'นกพิราบบินร่อนไปมาบนท้องฟ้ากว้างได้อย่างอิสระ. (Pigeons glide back and forth in the wide sky freely.)',
			synonym: ['เสรี (unbound)'],
			antonym: [],
		},
		{
			word: 'ส่วนบุคคล',
			translation: 'personally',
			pronunciation: 'suan-book-KHON',
			example:
				'เอกสารซองนี้เป็นจดหมายส่วนบุคคลที่ไม่ควรเปิดอ่าน. (This envelope is a personal letter that should not be opened.)',
			synonym: ['ส่วนตัว (privately)'],
			antonym: ['สาธารณะ (publicly)'],
		},
		{
			word: 'โดยตรง',
			translation: 'directly',
			pronunciation: 'doy-DRONG',
			example:
				'ผู้ซื้อสามารถติดต่อสอบถามข้อมูลกับเจ้าของบ้านได้โดยตรง. (The buyer can inquire about information directly with the homeowner.)',
			synonym: ['ตรงๆ (straightforwardly)'],
			antonym: ['โดยอ้อม (indirectly)'],
		},
		{
			word: 'โดยอ้อม',
			translation: 'indirectly',
			pronunciation: 'doy-AWM',
			example:
				'มาตรการประหยัดไฟส่งผลดีต่อสิ่งแวดล้อมโดยอ้อม. (The power-saving measures benefit the environment indirectly.)',
			synonym: [],
			antonym: ['โดยตรง (directly)'],
		},
		{
			word: 'นอกจากนี้',
			translation: 'furthermore',
			pronunciation: 'nawk-jaak-NEE',
			example:
				'นอกจากนี้เขายังอาสาช่วยทำความสะอาดพื้นที่ส่วนกลางด้วย. (Furthermore, he also volunteered to help clean the common area.)',
			synonym: ['ยิ่งไปกว่านั้น (moreover)'],
			antonym: [],
		},
		{
			word: 'ในทางกลับกัน',
			translation: 'conversely',
			pronunciation: 'nai-thaang-GLAP-gan',
			example:
				'ในทางกลับกัน การนอนดึกเป็นประจำทำให้ร่างกายอ่อนเพลีย. (Conversely, staying up late regularly exhausts the body.)',
			synonym: ['ในทางตรงข้าม (on the contrary)'],
			antonym: [],
		},
		{
			word: 'อย่างไรก็ตาม',
			translation: 'however',
			pronunciation: 'yaang-rai-gaw-DTAAM',
			example:
				'เขารู้สึกเหนื่อยมาก อย่างไรก็ตามเขาก็ยังทำงานจนเสร็จ. (He felt very tired; however, he still worked until it was finished.)',
			synonym: ['ถึงกระนั้น (nevertheless)'],
			antonym: [],
		},
		{
			word: 'มิฉะนั้น',
			translation: 'otherwise',
			pronunciation: 'mi-cha-NAN',
			example:
				'รีบออกเดินทางตอนนี้ มิฉะนั้นจะไม่ทันเที่ยวรถไฟเช้า. (Leave right now; otherwise, you will miss the morning train.)',
			synonym: ['ไม่อย่างนั้น (or else)'],
			antonym: [],
		},
		{
			word: 'โดยอัตโนมัติ',
			translation: 'automatically',
			pronunciation: 'doy-at-dta-noh-MAT',
			example:
				'ประตูทางเข้าห้างสรรพสินค้าเปิดออกโดยอัตโนมัติเมื่อคนเดินเข้าใกล้. (The mall entrance doors open automatically when people approach.)',
			synonym: [],
			antonym: ['ด้วยตนเอง (manually)'],
		},
		{
			word: 'อย่างกระตือรือร้น',
			translation: 'eagerly',
			pronunciation: 'yaang-gra-dteu-reu-RAWN',
			example:
				'นักเรียนยกมือตอบคำถามของคุณครูอย่างกระตือรือร้น. (The students raised their hands to answer the teacher eagerly.)',
			synonym: ['ขันแข็ง (enthusiastically)'],
			antonym: ['เฉื่อยชา (apathetically)'],
		},
	],
	pronouns: [
		{
			word: 'ฉัน',
			translation: 'I',
			pronunciation: 'CHAN',
			example:
				'ฉันชอบดื่มน้ำอุ่นหลังจากตื่นนอนตอนเช้า. (I like to drink warm water after waking up in the morning.)',
			synonym: ['ข้าพเจ้า (I formal)'],
			antonym: [],
		},
		{
			word: 'นั้น',
			translation: 'that',
			pronunciation: 'NAN',
			example:
				'ร้านกาแฟร้านนั้นมีขนมปังอบสดใหม่ทุกเช้า. (That coffee shop has freshly baked bread every morning.)',
			synonym: ['โน้น (that over there)'],
			antonym: ['นี้ (this)'],
		},
		{
			word: 'เธอ',
			translation: 'you',
			pronunciation: 'THOE',
			example:
				"เธอจะไปร่วมงานเลี้ยงวันเกิดของเพื่อนไหมเย็นนี้. (Will you attend our friend's birthday party this evening?)",
			synonym: ['คุณ (you polite)'],
			antonym: [],
		},
		{
			word: 'เขา',
			translation: 'he',
			pronunciation: 'KHAO',
			example:
				'เขาทำงานเป็นวิศวกรประจำบริษัทข้ามชาติแห่งนี้. (He works as an engineer at this multinational company.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'คุณ',
			translation: 'you',
			pronunciation: 'KHOON',
			example:
				'คุณต้องการรับกาแฟร้อนหรือน้ำผลไม้สดครับ. (Would you like to have hot coffee or fresh fruit juice?)',
			synonym: ['ท่าน (you formal)'],
			antonym: [],
		},
		{
			word: 'พวกเรา',
			translation: 'we',
			pronunciation: 'phuak-RAO',
			example:
				'พวกเราช่วยกันปลูกต้นไม้ในสวนสาธารณะท้ายหมู่บ้าน. (We helped each other plant trees in the public park behind the village.)',
			synonym: ['เรา (we casual)'],
			antonym: ['พวกเขา (they)'],
		},
		{
			word: 'พวกเธอ',
			translation: 'you all',
			pronunciation: 'phuak-THOE',
			example:
				'พวกเธอควรวางแผนการเดินทางล่วงหน้าก่อนออกเดินทาง. (You all should plan the trip in advance before departing.)',
			synonym: ['พวกคุณ (you all polite)'],
			antonym: [],
		},
		{
			word: 'พวกเขา',
			translation: 'they',
			pronunciation: 'phuak-KHAO',
			example:
				'พวกเขากำลังซ้อมดนตรีอยู่ในห้องเก็บเสียงชั้นใต้ดิน. (They are practicing music in the basement soundproof room.)',
			synonym: [],
			antonym: ['พวกเรา (we)'],
		},
		{
			word: 'เรา',
			translation: 'us',
			pronunciation: 'RAO',
			example:
				'คุณครูชวนพวกเราทุกคนไปทัศนศึกษาที่พิพิธภัณฑ์. (The teacher invited all of us on a field trip to the museum.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ของฉัน',
			translation: 'my',
			pronunciation: 'khawng-CHAN',
			example:
				'สมุดบันทึกเล่มสีเขียวเล่มนี้เป็นของฉัน. (This green notebook is mine.)',
			synonym: [],
			antonym: ['ของคุณ (yours)'],
		},
		{
			word: 'ของเธอ',
			translation: 'your',
			pronunciation: 'khawng-THOE',
			example:
				'กระเป๋าเป้ใบนี้เป็นของเธอใช่ไหม ลืมไว้บนเก้าอี้. (Is this backpack yours? It was left on the chair.)',
			synonym: [],
			antonym: ['ของฉัน (mine)'],
		},
		{
			word: 'ของเขา',
			translation: 'his',
			pronunciation: 'khawng-KHAO',
			example:
				'รถยนต์คันสีขาวที่จอดอยู่หน้าบ้านเป็นของเขา. (The white car parked in front of the house is his.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ของเรา',
			translation: 'our',
			pronunciation: 'khawng-RAO',
			example:
				'เป้าหมายหลักของเราคือการพัฒนาคุณภาพชีวิตของชุมชน. (Our primary goal is to improve the quality of life in the community.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ของพวกเธอ',
			translation: 'yours',
			pronunciation: 'khawng-phuak-THOE',
			example:
				'สัมภาระทั้งหมดที่วางอยู่ตรงนี้เป็นของพวกเธอใช่ไหม. (Is all this luggage sitting here yours?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ของคุณ',
			translation: 'your',
			pronunciation: 'khawng-KHOON',
			example:
				'ร่มคันยาวลายทางคันนี้เป็นของคุณหรือเปล่า. (Is this long striped umbrella yours?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'พวกเขาเอง',
			translation: 'themselves',
			pronunciation: 'phuak-khao-EENG',
			example:
				'เด็กๆ สามารถจัดโต๊ะทำการบ้านได้ด้วยพวกเขาเอง. (The children can arrange their study desks by themselves.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อันนั้น',
			translation: 'that one',
			pronunciation: 'an-NAN',
			example:
				'โปรดหยิบหนังสือเล่มหนาอันนั้นส่งให้ฉันที. (Please hand that thick book over to me.)',
			synonym: ['ชิ้นนั้น (that piece)'],
			antonym: ['อันนี้ (this one)'],
		},
		{
			word: 'พวกนั้น',
			translation: 'those',
			pronunciation: 'phuak-NAN',
			example:
				'กล่องพัสดุพวกนั้นต้องส่งไปรษณีย์ในวันพรุ่งนี้. (Those parcel boxes must be sent by post tomorrow.)',
			synonym: ['สิ่งเหล่านั้น (those things)'],
			antonym: ['พวกนี้ (these)'],
		},
		{
			word: 'อันนี้',
			translation: 'this one',
			pronunciation: 'an-NEE',
			example:
				'ขนมปังไส้ฟักทองอันนี้อร่อยและหวานกำลังดี. (This pumpkin-filled bread is delicious and suitably sweet.)',
			synonym: ['ชิ้นนี้ (this piece)'],
			antonym: ['อันนั้น (that one)'],
		},
		{
			word: 'พวกนี้',
			translation: 'these',
			pronunciation: 'phuak-NEE',
			example:
				'เอกสารสัญญาพวกนี้ต้องมีลายเซ็นรับรองทุกหน้า. (These contract documents must have certified signatures on every page.)',
			synonym: ['สิ่งเหล่านี้ (these items)'],
			antonym: ['พวกนั้น (those)'],
		},
		{
			word: 'มัน',
			translation: 'it',
			pronunciation: 'MAN',
			example:
				'ลูกแมวตัวนี้น่ารักมาก มันชอบนอนเล่นบนพรม. (This kitten is very cute; it likes sleeping on the rug.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'พวกเราเอง',
			translation: 'ourselves',
			pronunciation: 'phuak-rao-EENG',
			example:
				'พวกเราสามารถปรุงอาหารมื้อเย็นนี้ได้ด้วยพวกเราเอง. (We can cook this dinner by ourselves.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ผม',
			translation: 'I',
			pronunciation: 'PHOM',
			example:
				'ผมขออนุญาตส่งรายงานการประชุมผ่านทางอีเมลครับ. (I ask for permission to send the meeting report via email.)',
			synonym: ['กระผม (I very polite)'],
			antonym: [],
		},
		{
			word: 'หนู',
			translation: 'I',
			pronunciation: 'NOO',
			example:
				'หนูทำการบ้านวิชาคณิตศาสตร์เสร็จเรียบร้อยแล้วค่ะคุณแม่. (I have finished my math homework already, Mother.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ท่าน',
			translation: 'you',
			pronunciation: 'THAAN',
			example:
				'ขอเชิญท่านร่วมเป็นเกียรติในพิธีเปิดอาคารใหม่. (You are cordially invited to honor us at the new building opening ceremony.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แก',
			translation: 'you',
			pronunciation: 'GAE',
			example:
				'เย็นนี้แกจะไปออกกำลังกายที่สนามกีฬากับพวกเราไหม. (Will you go exercise at the sports stadium with us this evening?)',
			synonym: ['มึง (you vulgar)'],
			antonym: [],
		},
		{
			word: 'ใคร',
			translation: 'who',
			pronunciation: 'KHRAI',
			example:
				'ใครเป็นคนลืมกุญแจรถทิ้งไว้บนโต๊ะอาหารในครัว. (Who left the car keys behind on the kitchen dining table?)',
			synonym: ['ผู้ใด (whoever formal)'],
			antonym: [],
		},
		{
			word: 'อะไร',
			translation: 'what',
			pronunciation: 'a-RAI',
			example:
				'คุณต้องการสั่งอะไรมารับประทานเพิ่มเติมไหมครับ. (What would you like to order to eat additionally?)',
			synonym: ['สิ่งใด (what thing formal)'],
			antonym: [],
		},
		{
			word: 'ไหน',
			translation: 'which',
			pronunciation: 'NAI',
			example:
				'เส้นทางสายไหนที่จะพาพวกเราไปถึงสถานีรถไฟได้เร็วที่สุด. (Which route will take us to the train station the fastest?)',
			synonym: ['อันไหน (which one)'],
			antonym: [],
		},
		{
			word: 'ที่',
			translation: 'that',
			pronunciation: 'THEE',
			example:
				'เขาคืนหนังสือเล่มที่ฉันให้ยืมไปเมื่อสัปดาห์ก่อน. (He returned the book that I lent him last week.)',
			synonym: ['ซึ่ง (which)'],
			antonym: [],
		},
		{
			word: 'ซึ่ง',
			translation: 'which',
			pronunciation: 'SEUNG',
			example:
				'โครงการนี้ได้รับการอนุมัติงบประมาณ ซึ่งเป็นข่าวดีของชุมชน. (This project was approved for funding, which is good news for the community.)',
			synonym: ['อัน (that)'],
			antonym: [],
		},
		{
			word: 'ตัวเอง',
			translation: 'oneself',
			pronunciation: 'dtua-EENG',
			example:
				'ทุกคนควรดูแลรักษาสุขภาพร่างกายของตัวเองให้แข็งแรง. (Everyone should take good care of the health of oneself to stay strong.)',
			synonym: ['ตนเอง (oneself formal)'],
			antonym: [],
		},
		{
			word: 'ทุกคน',
			translation: 'everyone',
			pronunciation: 'thook-KHON',
			example:
				'ทุกคนพร้อมใจกันช่วยทำความสะอาดลานหน้าหมู่บ้าน. (Everyone willingly helped clean up the village square.)',
			synonym: ['ทุกผู้ทุกคน (all people)'],
			antonym: ['ไม่มีใคร (nobody)'],
		},
		{
			word: 'ทุกสิ่ง',
			translation: 'everything',
			pronunciation: 'thook-SING',
			example:
				'จัดเก็บทุกสิ่งเข้าที่อย่างเป็นระเบียบเรียบร้อยก่อนปิดห้อง. (Organize everything in its place neatly before closing the room.)',
			synonym: ['ทุกอย่าง (everything casual)'],
			antonym: ['ไม่มีอะไร (nothing)'],
		},
		{
			word: 'บางคน',
			translation: 'someone',
			pronunciation: 'baang-KHON',
			example:
				'บางคนชอบอ่านหนังสือเงียบๆ อยู่ที่มุมห้องสมุด. (Some people like reading books quietly at the library corner.)',
			synonym: ['ใครบางคน (somebody)'],
			antonym: [],
		},
		{
			word: 'บางสิ่ง',
			translation: 'something',
			pronunciation: 'baang-SING',
			example:
				'มีบางสิ่งเคลื่อนไหวอยู่ใต้พุ่มไม้หลังบ้านตอนพลบค่ำ. (There was something moving under the backyard bushes at dusk.)',
			synonym: ['บางอย่าง (something casual)'],
			antonym: [],
		},
		{
			word: 'ไม่มีใคร',
			translation: 'nobody',
			pronunciation: 'mai-mee-KHRAI',
			example:
				'ไม่มีใครอยู่ในห้องทำงานเลยเพราะถึงเวลาพักกลางวันแล้ว. (There is nobody in the office because it is already lunchtime.)',
			synonym: [],
			antonym: ['ทุกคน (everyone)'],
		},
		{
			word: 'ไม่มีอะไร',
			translation: 'nothing',
			pronunciation: 'mai-mee-a-RAI',
			example:
				'ตรวจดูในตู้เก็บของแล้วพบว่าไม่มีอะไรเสียหายเลย. (Checking inside the locker revealed that nothing was damaged at all.)',
			synonym: [],
			antonym: ['ทุกสิ่ง (everything)'],
		},
		{
			word: 'ผู้อื่น',
			translation: 'others',
			pronunciation: 'phoo-EUEN',
			example:
				'เราควรเคารพความคิดเห็นและสิทธิส่วนบุคคลของผู้อื่น. (We should respect the opinions and personal rights of others.)',
			synonym: ['คนอื่น (other people)'],
			antonym: ['ตนเอง (oneself)'],
		},
		{
			word: 'กัน',
			translation: 'each other',
			pronunciation: 'GAN',
			example:
				'เพื่อนสนิทสองคนพูดคุยและปรึกษากันอย่างเปิดอก. (Two close friends talked and consulted with each other candidly.)',
			synonym: ['ซึ่งกันและกัน (mutually)'],
			antonym: [],
		},
	],
	prepositions: [
		{
			word: 'ของ/จาก',
			translation: 'of or from',
			pronunciation: 'khawng-JAAK',
			example:
				'กระเป๋าใบนี้ทำมาจากหนังแท้คุณภาพดีของช่างฝีมือพื้นเมือง. (This bag is made from genuine quality leather of local craftsmen.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ถึง',
			translation: 'to',
			pronunciation: 'THEUNG',
			example:
				'ขบวนรถไฟแล่นจากสถานีต้นทางไปถึงสถานีปลายทางตรงเวลา. (The train ran from the starting station to the destination station on time.)',
			synonym: ['สู่ (towards)'],
			antonym: [],
		},
		{
			word: 'ใน/บน',
			translation: 'in or on',
			pronunciation: 'nai-BON',
			example:
				'จัดวางสมุดบันทึกไว้ในลิ้นชักและวางแก้วน้ำไว้บนโต๊ะทำงาน. (Place the notebook in the drawer and set the water glass on the desk.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'กับ',
			translation: 'with',
			pronunciation: 'GAP',
			example:
				'เขานั่งรับประทานอาหารค่ำร่วมกับเพื่อนสนิทที่ร้านอาหารริมน้ำ. (He sat dining at dinner with his close friend at the riverside restaurant.)',
			synonym: ['ร่วมกับ (together with)'],
			antonym: ['โดยไม่มี (without)'],
		},
		{
			word: 'โดยไม่มี',
			translation: 'without',
			pronunciation: 'doy-mai-MEE',
			example:
				'อย่าขับรถออกไปบนถนนมืดโดยไม่มีไฟส่องสว่างหน้ารถ. (Do not drive out onto dark roads without front headlights.)',
			synonym: ['ปราศจาก (devoid of)'],
			antonym: ['กับ (with)'],
		},
		{
			word: 'โดย',
			translation: 'by',
			pronunciation: 'DOY',
			example:
				'เดินทางไปทำงานทุกเช้าโดยรถไฟฟ้าเพื่อหลีกเลี่ยงรถติด. (Travel to work every morning by sky train to avoid traffic.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'สำหรับ',
			translation: 'for',
			pronunciation: 'sam-RAP',
			example:
				'อาหารจานนี้จัดเตรียมไว้สำหรับแขกคนพิเศษโดยเฉพาะ. (This dish was prepared for the special guest specifically.)',
			synonym: ['เพื่อ (for the sake of)'],
			antonym: [],
		},
		{
			word: 'บน/เกี่ยวกับ',
			translation: 'on or about',
			pronunciation: 'bon-geeaw-GAP',
			example:
				'เขาวางหนังสือประวัติศาสตร์เกี่ยวกับธรรมชาติไว้บนโต๊ะ. (He laid the history book about nature on the table.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ระหว่าง',
			translation: 'between',
			pronunciation: 'ra-WAANG',
			example:
				'ร้านกาแฟตั้งอยู่ระหว่างธนาคารและร้านขายยาหัวมุมถนน. (The coffee shop is situated between the bank and the corner pharmacy.)',
			synonym: ['ท่ามกลาง (amidst)'],
			antonym: [],
		},
		{
			word: 'ไปยัง',
			translation: 'towards',
			pronunciation: 'bpai-YANG',
			example:
				'กลุ่มนักท่องเที่ยวเดินมุ่งหน้าไปยังยอดเขาเพื่อชมพระอาทิตย์ขึ้น. (The group of hikers walked towards the summit to watch the sunrise.)',
			synonym: ['มุ่งสู่ (headed for)'],
			antonym: [],
		},
		{
			word: 'ในระหว่าง',
			translation: 'during',
			pronunciation: 'nai-ra-WAANG',
			example:
				'กรุณาปิดเสียงโทรศัพท์มือถือในระหว่างการประชุมสำคัญ. (Please mute mobile phones during the important meeting.)',
			synonym: ['ขณะที่ (while)'],
			antonym: [],
		},
		{
			word: 'หลังจาก',
			translation: 'after',
			pronunciation: 'lang-JAAK',
			example:
				'หลังจากรับประทานอาหารเสร็จพวกเราก็ออกไปเดินเล่นในสวน. (After finishing the meal, we went out for a walk in the park.)',
			synonym: ['ภายหลัง (subsequent to)'],
			antonym: ['ก่อน (before)'],
		},
		{
			word: 'ก่อน',
			translation: 'before',
			pronunciation: 'GAWN',
			example:
				'นักเรียนควรทบทวนตำราเรียนอย่างละเอียดก่อนเข้าห้องสอบ. (Students should review textbooks thoroughly before entering exam rooms.)',
			synonym: [],
			antonym: ['หลังจาก (after)'],
		},
		{
			word: 'จนถึง',
			translation: 'until',
			pronunciation: 'jon-THEUNG',
			example:
				'ห้องสมุดประชาชนเปิดให้บริการตั้งแต่เช้าจนถึงสองทุ่มทุกวัน. (The public library is open for service from morning until eight at night daily.)',
			synonym: ['จวบจน (up until)'],
			antonym: [],
		},
		{
			word: 'ใต้',
			translation: 'under',
			pronunciation: 'DTAI',
			example:
				'ลูกแมวนอนหลับอย่างอบอุ่นอยู่ใต้โต๊ะไม้ในห้องครัว. (The kitten is sleeping warmly under the wooden table in the kitchen.)',
			synonym: ['ข้างใต้ (underneath)'],
			antonym: ['บน (on)'],
		},
		{
			word: 'เหนือ',
			translation: 'over',
			pronunciation: 'NEUA',
			example:
				'ฝูงนกบินร่อนอยู่เหนือกิ่งไม้สูงในยามเย็น. (A flock of birds glides over the high branches in the evening.)',
			synonym: ['เบื้องบน (above)'],
			antonym: ['ใต้ (under)'],
		},
		{
			word: 'ต่อต้าน',
			translation: 'against',
			pronunciation: 'dtor-DTAAN',
			example:
				'ชาวบ้านร่วมตัวกันต่อต้านโครงการตัดไม้ทำลายป่าต้นน้ำ. (Villagers rallied against the project logging upstream forests.)',
			synonym: ['คัดค้าน (to oppose)'],
			antonym: ['สนับสนุน (in favor of)'],
		},
		{
			word: 'รอบๆ',
			translation: 'around',
			pronunciation: 'rawp-RAWP',
			example:
				'คนสวนปลูกต้นไม้พุ่มดอกสีสดใสไว้รอบๆ สระบัว. (The gardener planted vibrant flowering shrubs around the lotus pond.)',
			synonym: ['โดยรอบ (encircling)'],
			antonym: [],
		},
		{
			word: 'ข้างๆ',
			translation: 'next to',
			pronunciation: 'khaang-KHAANG',
			example:
				'เขาวางแก้วกาแฟร้อนไว้ข้างๆ สมุดบันทึกบนโต๊ะทำงาน. (He placed the cup of hot coffee next to the notebook on the desk.)',
			synonym: ['เคียงข้าง (beside)'],
			antonym: [],
		},
		{
			word: 'ข้างหน้า',
			translation: 'in front of',
			pronunciation: 'khaang-NAA',
			example:
				'มีต้นจำปีขนาดใหญ่ยืนต้นออกดอกหอมอยู่ข้างหน้าตัวบ้าน. (A large white champaka tree stands blooming fragrantly in front of the house.)',
			synonym: ['ด้านหน้า (frontward)'],
			antonym: ['ข้างหลัง (behind)'],
		},
		{
			word: 'ข้างใน',
			translation: 'inside of',
			pronunciation: 'khaang-NAI',
			example:
				'กรุณารออยู่ข้างในห้องรับรองเพื่อดื่มน้ำชาคลายร้อน. (Please wait inside of the reception room to sip tea and cool down.)',
			synonym: ['ภายใน (within)'],
			antonym: ['ข้างนอก (outside of)'],
		},
		{
			word: 'ข้างนอก',
			translation: 'outside of',
			pronunciation: 'khaang-NAWK',
			example:
				'อย่าวางรองเท้าทิ้งไว้ข้างนอกบ้านตอนฝนกำลังจะตก. (Do not leave shoes outside of the house when it is about to rain.)',
			synonym: ['ภายนอก (outward)'],
			antonym: ['ข้างใน (inside of)'],
		},
		{
			word: 'ท่ามกลาง',
			translation: 'among',
			pronunciation: 'thaam-GLAANG',
			example:
				'บ้านไม้หลังเล็กตั้งอยู่อย่างสงบสุขท่ามกลางสวนผลไม้ร่มรื่น. (The small wooden cottage is situated peacefully among shady orchards.)',
			synonym: ['แวดล้อมด้วย (amidst)'],
			antonym: [],
		},
		{
			word: 'ใกล้',
			translation: 'near',
			pronunciation: 'GLAI',
			example:
				'ร้านสะดวกซื้อเปิดใหม่อยู่ใกล้กับทางเข้าหมู่บ้านของเรา. (The newly opened convenience store is near the entrance of our village.)',
			synonym: ['ชิด (close)'],
			antonym: ['ไกลจาก (far from)'],
		},
		{
			word: 'ไกลจาก',
			translation: 'far from',
			pronunciation: 'glai-JAAK',
			example:
				'โรงแรมแห่งนี้ตั้งอยู่ไกลจากชายหาดจึงมีบรรยากาศที่เงียบสงบ. (This hotel is located far from the beach, thus having a peaceful ambiance.)',
			synonym: ['ห่างไกล (distant from)'],
			antonym: ['ใกล้ (near)'],
		},
		{
			word: 'เหมือน',
			translation: 'like',
			pronunciation: 'MEUAN',
			example:
				'เด็กน้อยยิ้มแย้มแจ่มใสดูสดชื่นเหมือนดอกไม้แรกแย้มยามเช้า. (The toddler smiles brightly, looking fresh like morning blooming flowers.)',
			synonym: ['ดุจ (as)'],
			antonym: ['ต่างจาก (different from)'],
		},
		{
			word: 'ตาม',
			translation: 'according to',
			pronunciation: 'DTAAM',
			example:
				'พนักงานทุกคนต้องปฏิบัติตามกฎระเบียบความปลอดภัยอย่างเคร่งครัด. (All employees must act according to safety regulations strictly.)',
			synonym: ['สอดคล้องกับ (in line with)'],
			antonym: [],
		},
		{
			word: 'ผ่าน',
			translation: 'through',
			pronunciation: 'PHAAN',
			example:
				'แสงแดดยามเช้าส่องทะลุผ่านม่านหน้าต่างเข้ามาในห้องนอน. (Morning sunlight beams through window drapes into the bedroom.)',
			synonym: ['ลอด (passing)'],
			antonym: [],
		},
		{
			word: 'กลาง',
			translation: 'in the middle of',
			pronunciation: 'GLAANG',
			example:
				'มีน้ำพุหินอ่อนสวยงามตั้งอยู่กลางสวนหย่อมของโรงแรม. (A beautiful marble fountain stands in the middle of the hotel garden.)',
			synonym: ['ใจกลาง (center of)'],
			antonym: ['ริม (edge of)'],
		},
		{
			word: 'ข้างหลัง',
			translation: 'behind',
			pronunciation: 'khaang-LANG',
			example:
				'มีแปลงปลูกผักสวนครัวขนาดย่อมอยู่ข้างหลังห้องครัว. (There is a modest kitchen garden plot behind the kitchen.)',
			synonym: ['ด้านหลัง (rearward)'],
			antonym: ['ข้างหน้า (in front of)'],
		},
		{
			word: 'ร่วมกับ',
			translation: 'together with',
			pronunciation: 'ruam-GAP',
			example:
				'เขาทำงานวิจัยชิ้นนี้ร่วมกับอาจารย์ที่ปรึกษาจากมหาวิทยาลัย. (He conducted this research together with an advisor from the university.)',
			synonym: ['พร้อมด้วย (along with)'],
			antonym: [],
		},
		{
			word: 'เนื่องจาก',
			translation: 'because of',
			pronunciation: 'neuang-JAAK',
			example:
				'เครื่องบินล่าช้าเนื่องจากสภาพอากาศแปรปรวนและมีหมอกลงจัด. (The flight was delayed because of turbulent weather and thick mist.)',
			synonym: ['สืบเนื่องจาก (owing to)'],
			antonym: [],
		},
		{
			word: 'ทางซ้าย',
			translation: 'to the left of',
			pronunciation: 'thaang-SAAI',
			example:
				'เลี้ยวรถไปทางซ้ายของสี่แยกเพื่อเข้าสู่ถนนสายหลัก. (Turn the car to the left of the intersection to enter the main highway.)',
			synonym: ['ด้านซ้าย (left side)'],
			antonym: ['ทางขวา (to the right of)'],
		},
		{
			word: 'ทางขวา',
			translation: 'to the right of',
			pronunciation: 'thaang-KHWAA',
			example:
				'ตู้เอทีเอ็มตั้งอยู่ทางขวาของประตูทางเข้าซูเปอร์มาร์เก็ต. (The automated teller machine is located to the right of the supermarket entrance.)',
			synonym: ['ด้านขวา (right side)'],
			antonym: ['ทางซ้าย (to the left of)'],
		},
		{
			word: 'แม้ว่า',
			translation: 'despite',
			pronunciation: 'mae-WAA',
			example:
				'แม้ว่าฝนจะตกพรำๆ นักกีฬาก็ยังคงฝึกซ้อมกลางแจ้งต่อไป. (Despite the light rain, athletes continued training outdoors.)',
			synonym: ['ทั้งๆ ที่ (in spite of)'],
			antonym: [],
		},
		{
			word: 'ด้านล่าง',
			translation: 'below',
			pronunciation: 'daan-LAANG',
			example:
				'ห้องออกกำลังกายของอาคารตั้งอยู่ด้านล่างบริเวณชั้นใต้ดิน. (The building gym is located below in the basement area.)',
			synonym: ['ข้างล่าง (underneath)'],
			antonym: ['ด้านบน (above)'],
		},
		{
			word: 'เกี่ยวกับ',
			translation: 'regarding',
			pronunciation: 'geeaw-GAP',
			example:
				'นักศึกษาค้นคว้าข้อมูลเพิ่มเติมเกี่ยวกับประวัติศาสตร์ท้องถิ่นในหอสมุด. (Students researched extra details regarding local history in the library.)',
			synonym: ['ว่าด้วย (concerning)'],
			antonym: [],
		},
		{
			word: 'ในเรื่องของ',
			translation: 'with regard to',
			pronunciation: 'nai-reuang-KHAWNG',
			example:
				'ในเรื่องของความสะอาด ร้านอาหารแห่งนี้ผ่านเกณฑ์มาตรฐานระดับสูง. (With regard to cleanliness, this restaurant passed high standard criteria.)',
			synonym: ['ในส่วนของ (as for)'],
			antonym: [],
		},
		{
			word: 'สนับสนุน',
			translation: 'in favor of',
			pronunciation: 'sa-nap-sa-NOON',
			example:
				'ประชาชนส่วนใหญ่ลงคะแนนสนับสนุนการสร้างสวนสาธารณะแห่งใหม่. (Most citizens voted in favor of constructing the new public park.)',
			synonym: ['เห็นพ้อง (concurring)'],
			antonym: ['ต่อต้าน (against)'],
		},
		{
			word: 'แทนที่',
			translation: 'instead of',
			pronunciation: 'thaaen-THEE',
			example:
				'เขาเลือกดื่มน้ำเปล่าสะอาดแทนที่น้ำอัดลมที่มีน้ำตาลสูง. (He chose to drink clean plain water instead of sugary soda.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ระหว่างทาง',
			translation: 'on the way to',
			pronunciation: 'ra-waang-THAANG',
			example:
				'เราแวะซื้อผลไม้สดริมถนนระหว่างทางไปทะเล. (We stopped to buy fresh fruit by the road on the way to the sea.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เพื่อประโยชน์ของ',
			translation: 'for the benefit of',
			pronunciation: 'pheua-pra-yoht-KHAWNG',
			example:
				'มาตรการประหยัดพลังงานนี้จัดทำขึ้นเพื่อประโยชน์ของทุกคนในองค์กร. (This energy-saving measure was drafted for the benefit of everyone in the firm.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ทั่ว',
			translation: 'throughout',
			pronunciation: 'THUA',
			example:
				'ข่าวสารงานเทศกาลปีใหม่แพร่สะพัดไปทั่วเมืองอย่างรวดเร็ว. (News about the New Year festival spread throughout the town quickly.)',
			synonym: ['ตลอด (all over)'],
			antonym: [],
		},
		{
			word: 'ตั้งแต่',
			translation: 'since',
			pronunciation: 'dtang-DTAE',
			example:
				'ครอบครัวนี้อาศัยอยู่ในย่านนี้ตั้งแต่สมัยคุณปู่ยังเป็นเด็ก. (This family has lived in this neighborhood since grandfather was a child.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ภายใน',
			translation: 'within',
			pronunciation: 'phaai-NAI',
			example:
				'กรุณาส่งแบบฟอร์มคำร้องคืนเจ้าหน้าที่ภายในสามวันทำการ. (Please submit the application form back to officers within three working days.)',
			synonym: [],
			antonym: ['ภายนอก (outside of)'],
		},
		{
			word: 'ภายนอก',
			translation: 'outside',
			pronunciation: 'phaai-NAWK',
			example:
				'ผนังภายนอกของอาคารทาด้วยสีกันน้ำเพื่อป้องกันความชื้น. (The outside walls of the building are painted with waterproof paint to resist dampness.)',
			synonym: [],
			antonym: ['ภายใน (within)'],
		},
		{
			word: 'เว้นแต่',
			translation: 'except',
			pronunciation: 'wen-DTAE',
			example:
				'ทุกคนต้องเข้าร่วมการประชุมนี้ เว้นแต่ผู้ที่ได้รับอนุญาตลาป่วย. (Everyone must attend this meeting, except those permitted sick leave.)',
			synonym: ['ยกเว้น (apart from)'],
			antonym: [],
		},
		{
			word: 'นอกจาก',
			translation: 'besides',
			pronunciation: 'nawk-JAAK',
			example:
				'นอกจากผลไม้สดแล้ว ร้านนี้ยังมีขนมอบและเครื่องดื่มสมุนไพรจำหน่าย. (Besides fresh fruit, this shop also sells baked pastries and herbal drinks.)',
			synonym: ['นอกเหนือจาก (in addition to)'],
			antonym: [],
		},
		{
			word: 'ตรงข้ามกับ',
			translation: 'opposite to',
			pronunciation: 'drong-khaam-GAP',
			example:
				'ร้านขายยาตั้งอยู่ตรงข้ามกับโรงพยาบาลประจำจังหวัดพอดี. (The pharmacy is situated right opposite to the provincial hospital.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ถัดจาก',
			translation: 'next to',
			pronunciation: 'that-JAAK',
			example:
				'ห้องอ่านหนังสือตั้งอยู่ถัดจากห้องคอมพิวเตอร์บนชั้นสอง. (The reading room is located next to the computer lab on the second floor.)',
			synonym: ['ติดกับ (adjacent to)'],
			antonym: [],
		},
		{
			word: 'ล้อมรอบด้วย',
			translation: 'surrounded by',
			pronunciation: 'lawm-rawp-DUAI',
			example:
				'บ้านพักตากอากาศหลังงามล้อมรอบด้วยทิวเขาสลับซับซ้อนและป่าสน. (The handsome holiday home is surrounded by rolling hills and pine woods.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'มุ่งหน้าสู่',
			translation: 'bound for',
			pronunciation: 'moong-naa-SOO',
			example:
				'ขบวนรถไฟด่วนกำลังแล่นมุ่งหน้าสู่สถานีปลายทางทางภาคเหนือ. (The express train is speeding bound for the northern terminus.)',
			synonym: ['มุ่งสู่ (headed toward)'],
			antonym: [],
		},
		{
			word: 'ข้าม',
			translation: 'across',
			pronunciation: 'KHAAM',
			example:
				'คนเดินเท้าควรใช้สะพานลอยเมื่อต้องการเดินข้ามถนนที่มีรถพลุกพล่าน. (Pedestrians should use overpasses when needing to walk across busy roads.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เรียบตาม',
			translation: 'along',
			pronunciation: 'reeap-DTAAM',
			example:
				'เราปั่นจักรยานออกกำลังกายเรียบตามแนวชายหาดในตอนเช้าตรู่. (We pedaled bicycles for exercise along the shoreline at dawn.)',
			synonym: ['เลียบ (following the edge)'],
			antonym: [],
		},
		{
			word: 'ผ่านทาง',
			translation: 'by way of',
			pronunciation: 'phaan-THAANG',
			example:
				'คุณสามารถส่งเอกสารยืนยันตัวตนผ่านทางระบบออนไลน์ได้ทันที. (You can submit identity verification files by way of the online portal right away.)',
			synonym: ['โดยทาง (via)'],
			antonym: [],
		},
		{
			word: 'เทียบกับ',
			translation: 'compared to',
			pronunciation: 'theeap-GAP',
			example:
				'ราคาผลไม้ในตลาดนี้ถือว่าย่อมเยาเมื่อเทียบกับห้างสรรพสินค้าใหญ่. (Fruit prices in this market are affordable compared to large department stores.)',
			synonym: ['เปรียบกับ (contrasted with)'],
			antonym: [],
		},
		{
			word: 'ในนามของ',
			translation: 'on behalf of',
			pronunciation: 'nai-naam-KHAWNG',
			example:
				'ผู้จัดการกล่าวเปิดงานเลี้ยงต้อนรับในนามของพนักงานทุกคน. (The manager gave the welcoming speech on behalf of all staff members.)',
			synonym: ['ในฐานะตัวแทน (as representative of)'],
			antonym: [],
		},
		{
			word: 'อันเนื่องมาจาก',
			translation: 'owing to',
			pronunciation: 'an-neuang-maa-JAAK',
			example:
				'ถนนสายนี้ชำรุดเสียหายอันเนื่องมาจากน้ำท่วมใหญ่เมื่อสัปดาห์ก่อน. (This roadway was damaged owing to the massive flood last week.)',
			synonym: ['เนื่องด้วย (attributable to)'],
			antonym: [],
		},
		{
			word: 'สืบเนื่องจาก',
			translation: 'subsequent to',
			pronunciation: 'seup-neuang-JAAK',
			example:
				'ยอดสั่งซื้อสินค้าพุ่งสูงขึ้นสืบเนื่องจากโปรโมชันลดราคาประจำปี. (Product purchase orders soared subsequent to the annual discount sale promotion.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ตลอด',
			translation: 'throughout',
			pronunciation: 'dta-LAWT',
			example:
				'เขาทำงานหนักด้วยความซื่อสัตย์สุจริตมาตลอดช่วงชีวิตการทำงาน. (He worked hard with integrity throughout his entire professional life.)',
			synonym: ['ตลอดทั้ง (all along)'],
			antonym: [],
		},
		{
			word: 'พ้น',
			translation: 'beyond',
			pronunciation: 'PHON',
			example:
				'คนขับพาผู้โดยสารแล่นรถผ่านพ้นเขตอันตรายดินถล่มได้อย่างปลอดภัย. (The driver took passengers safely past beyond the landslide hazard area.)',
			synonym: ['เลย (past)'],
			antonym: [],
		},
		{
			word: 'เพื่อ',
			translation: 'for the purpose of',
			pronunciation: 'PHEUA',
			example:
				'เขากำลังเก็บหอมรอมริบเพื่อสร้างบ้านหลังใหม่ให้ครอบครัว. (He is saving earnings for the purpose of building a new home for the family.)',
			synonym: ['เพื่อประโยชน์ (in order to)'],
			antonym: [],
		},
	],
	conjunctions: [
		{
			word: 'และ',
			translation: 'and',
			pronunciation: 'LAE',
			example:
				'พ่อชอบดื่มกาแฟร้อนและอ่านหนังสือพิมพ์ยามเช้า. (Father likes to drink hot coffee and read the newspaper in the morning.)',
			synonym: ['พร้อมทั้ง (as well as)'],
			antonym: [],
		},
		{
			word: 'หรือ',
			translation: 'or',
			pronunciation: 'REU',
			example:
				'คุณต้องการเดินทางโดยรถไฟหรือรถโดยสารประจำทาง. (Do you prefer to travel by train or by bus?)',
			synonym: ['หรือไม่ก็ (or else)'],
			antonym: [],
		},
		{
			word: 'แต่',
			translation: 'but',
			pronunciation: 'DAE',
			example:
				'เขาอยากไปวิ่งออกกำลังกายแต่ฝนเริ่มตกลงมาพอดี. (He wanted to go for a run, but it started raining.)',
			synonym: ['ทว่า (yet)'],
			antonym: [],
		},
		{
			word: 'แต่ว่า',
			translation: 'but rather',
			pronunciation: 'dae-WAA',
			example:
				'ฉันไม่ได้โกรธเขา แต่ว่ารู้สึกผิดหวังกับการกระทำมากกว่า. (I am not angry with him, but rather disappointed with the action.)',
			synonym: ['หากแต่ (nonetheless)'],
			antonym: [],
		},
		{
			word: 'แม้ว่า',
			translation: 'although',
			pronunciation: 'mae-WAA',
			example:
				'แม้ว่าอากาศจะหนาวจัด นักกีฬาก็ยังคงฝึกซ้อมกลางแจ้ง. (Although the weather was freezing, the athletes still trained outdoors.)',
			synonym: ['ถึงแม้ว่า (even though)'],
			antonym: [],
		},
		{
			word: 'เพราะว่า',
			translation: 'because',
			pronunciation: 'phraw-WAA',
			example:
				'เขามาทำงานสายเพราะว่าการจราจรบนถนนติดขัดอย่างหนัก. (He arrived late to work because the traffic on the road was heavily congested.)',
			synonym: ['เนื่องด้วย (inasmuch as)'],
			antonym: [],
		},
		{
			word: 'ก็',
			translation: 'then',
			pronunciation: 'GAW',
			example:
				'เมื่อฝนหยุดตกแล้ว พวกเราก็ออกเดินทางกันต่อทันที. (When the rain stopped, then we continued our trip immediately.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เช่น',
			translation: 'for example',
			pronunciation: 'CHEN',
			example:
				'ผลไม้ไทยมีรสชาติหวานอร่อย เช่น ทุเรียน มะม่วง และมังคุด. (Thai fruits are sweet and delicious, for example durian, mango, and mangosteen.)',
			synonym: ['อาทิ (such as)'],
			antonym: [],
		},
		{
			word: 'ดังนั้น',
			translation: 'therefore',
			pronunciation: 'dang-NAN',
			example:
				'เขาขยันอ่านหนังสือทบทวนบทเรียน ดังนั้นเขาจึงสอบผ่านได้คะแนนดี. (He studied hard reviewing lessons; therefore, he passed exams with good grades.)',
			synonym: ['ฉะนั้น (consequently)'],
			antonym: [],
		},
		{
			word: 'ด้วยเหตุนี้',
			translation: 'for that reason',
			pronunciation: 'duai-heet-NEE',
			example:
				'สภาพอากาศแปรปรวน ด้วยเหตุนี้เที่ยวบินจึงต้องถูกยกเลิกชั่วคราว. (The weather became turbulent; for that reason, flights had to be canceled temporarily.)',
			synonym: ['เพราะฉะนั้น (hence)'],
			antonym: [],
		},
		{
			word: 'งั้นก็',
			translation: 'then',
			pronunciation: 'ngan-GAW',
			example:
				'ถ้าคุณไม่สะดวกมาร่วมประชุม งั้นก็ส่งตัวแทนมาแทนได้. (If you are not available for the meeting, then you may send a proxy instead.)',
			synonym: ['ถ้าอย่างนั้น (in that case)'],
			antonym: [],
		},
		{
			word: 'แล้วก็',
			translation: 'and then',
			pronunciation: 'laaeo-GAW',
			example:
				'เธอจัดโต๊ะทำงานเสร็จแล้วก็เริ่มเปิดคอมพิวเตอร์พิมพ์รายงาน. (She tidied her desk, and then she turned on the computer to type the report.)',
			synonym: ['ต่อจากนั้น (subsequently)'],
			antonym: [],
		},
		{
			word: 'ในขณะที่',
			translation: 'while',
			pronunciation: 'nai-kha-na-THEE',
			example:
				'เขานั่งจิบชาร้อนเงียบๆ ในขณะที่ฝนกำลังตกหนักอยู่นอกบ้าน. (He sat quietly sipping hot tea while heavy rain fell outside the house.)',
			synonym: ['ระหว่างที่ (whilst)'],
			antonym: [],
		},
		{
			word: 'เมื่อ',
			translation: 'when',
			pronunciation: 'MEUA',
			example:
				'เมื่อเดินทางถึงสนามบิน กรุณาโทรติดต่อแจ้งให้ครอบครัวทราบด้วย. (When you arrive at the airport, please call to inform the family too.)',
			synonym: ['ยาม (at the time)'],
			antonym: [],
		},
		{
			word: 'ถ้า',
			translation: 'if',
			pronunciation: 'THAA',
			example:
				'ถ้าวันพรุ่งนี้แดดออก พวกเราจะพากันไปปั่นจักรยานที่สวนสาธารณะ. (If it is sunny tomorrow, we will go cycling together at the park.)',
			synonym: ['หาก (provided that)'],
			antonym: [],
		},
		{
			word: 'ในกรณีที่',
			translation: 'in case',
			pronunciation: 'nai-ga-ra-nee-THEE',
			example:
				'ในกรณีที่เกิดเหตุเพลิงไหม้ ให้ใช้บันไดหนีไฟแทนการใช้ลิฟต์. (In case of a fire breakout, use emergency fire stairs instead of lifts.)',
			synonym: ['หากเกิด (in the event that)'],
			antonym: [],
		},
		{
			word: 'เว้นแต่',
			translation: 'unless',
			pronunciation: 'wen-DAE',
			example:
				'เราจะเริ่มประชุมตรงเวลา เว้นแต่จะมีประกาศเลื่อนกะทันหัน. (We will start the meeting on time, unless an unexpected postponement is announced.)',
			synonym: ['นอกจากว่า (except that)'],
			antonym: [],
		},
		{
			word: 'เหมือนกับว่า',
			translation: 'as if',
			pronunciation: 'meuan-gap-WAA',
			example:
				'เขารู้จักเส้นทางในเมืองนี้ดีมาก เหมือนกับว่าอาศัยอยู่ที่นี่มานาน. (He knows city alleys very well, as if he had resided here for years.)',
			synonym: ['ราวกับว่า (as though)'],
			antonym: [],
		},
		{
			word: 'เช่นเดียวกับ',
			translation: 'just as',
			pronunciation: 'chen-deeaw-GAP',
			example:
				'ต้นไม้ต้องการแสงแดด เช่นเดียวกับที่มนุษย์ต้องการอากาศบริสุทธิ์. (Plants need sunlight, just as human beings require fresh air.)',
			synonym: ['ดุจเดียวกับ (in the same way as)'],
			antonym: [],
		},
		{
			word: 'เช่นเดียวกับที่',
			translation: 'as well as',
			pronunciation: 'chen-deeaw-gap-THEE',
			example:
				'การว่ายน้ำช่วยเสริมกล้ามเนื้อ เช่นเดียวกับที่การวิ่งช่วยฝึกความอดทน. (Swimming builds muscle, as well as running develops stamina.)',
			synonym: ['เฉกเช่นที่ (similarly to)'],
			antonym: [],
		},
		{
			word: 'เพื่อที่ว่า',
			translation: 'so that',
			pronunciation: 'pheua-thee-WAA',
			example:
				'เราต้องรีบออกเดินทางแต่เช้าตรู่ เพื่อที่ว่าพวกเราจะได้ไปถึงก่อนเที่ยง. (We must set out early in the morning so that we can arrive before noon.)',
			synonym: ['เพื่อจะได้ (in order that)'],
			antonym: [],
		},
		{
			word: 'เพื่อว่า',
			translation: 'in order that',
			pronunciation: 'pheua-WAA',
			example:
				'เขาอธิบายแผนงานอย่างละเอียด เพื่อว่าทุกคนจะได้เข้าใจตรงกัน. (He explained the plan thoroughly in order that everyone would understand uniformly.)',
			synonym: ['เพื่อมิให้ (so as to)'],
			antonym: [],
		},
		{
			word: 'หรือไม่',
			translation: 'or not',
			pronunciation: 'reu-MAI',
			example:
				'โปรดแจ้งยืนยันว่าคุณจะมาร่วมงานเลี้ยงรุ่นหรือไม่ภายในสัปดาห์นี้. (Please confirm whether you will attend the reunion party or not by this week.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ไม่ว่าจะ',
			translation: 'no matter if',
			pronunciation: 'mai-waa-JA',
			example:
				'ไม่ว่าจะเกิดปัญหาอะไรขึ้น ครอบครัวจะคอยอยู่เคียงข้างเธอเสมอ. (No matter if problems arise, the family will always stand by your side.)',
			synonym: ['แม้ว่า (regardless of)'],
			antonym: [],
		},
		{
			word: 'หรือไม่ก็',
			translation: 'or else',
			pronunciation: 'reu-mai-GAW',
			example:
				"เราควรไปขึ้นรถไฟเที่ยวเช้า หรือไม่ก็รอขึ้นเที่ยวบ่ายสองโมง. (We should catch the morning train, or else wait for the two o'clock afternoon one.)",
			synonym: ['มิฉะนั้น (alternatively)'],
			antonym: [],
		},
		{
			word: 'ไม่ว่าจะเป็น',
			translation: 'whether it be',
			pronunciation: 'mai-waa-ja-BPEN',
			example:
				'ทุกคนต้องปฏิบัติตามกฎ ไม่ว่าจะเป็นพนักงานใหม่หรือผู้จัดการ. (Everyone must follow the rules, whether it be a new employee or a manager.)',
			synonym: ['ไม่ว่าจะ (regardless whether)'],
			antonym: [],
		},
		{
			word: 'ไม่ว่าจะว่า',
			translation: 'regardless of',
			pronunciation: 'mai-waa-ja-WAA',
			example:
				'ไม่ว่าจะว่าอย่างไร โครงการอนุรักษ์ป่าไม้ก็ยังคงต้องดำเนินต่อไป. (Regardless of what is said, the forest conservation project must continue.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'นอกจากนี้',
			translation: 'besides',
			pronunciation: 'nawk-jaak-NEE',
			example:
				'อาหารร้านนี้อร่อยมาก นอกจากนี้ราคายังย่อมเยาและบริการดีเยี่ยม. (Food in this shop is delicious; besides, prices are affordable and service is great.)',
			synonym: ['ยิ่งกว่านั้น (furthermore)'],
			antonym: [],
		},
		{
			word: 'มากยิ่งขึ้น',
			translation: 'even more',
			pronunciation: 'maak-ying-KHEUN',
			example:
				'หากขยันฝึกฝนซ้อมเปียโนทุกวัน ฝีมือของเธอก็จะพัฒนามากยิ่งขึ้น. (If you practice the piano every day, your skills will improve even more.)',
			synonym: ['ทวีคูณ (all the more)'],
			antonym: ['ลดน้อยลง (decreasingly)'],
		},
		{
			word: 'ไม่เพียงแต่',
			translation: 'not only',
			pronunciation: 'mai-pheeang-DAE',
			example:
				'เขาไม่เพียงแต่มีน้ำใจดี แต่ยังมีความรับผิดชอบต่องานสูงมาก. (He is not only kind-hearted, but also highly responsible toward work.)',
			synonym: ['มิใช่เพียง (not just)'],
			antonym: [],
		},
		{
			word: 'แต่ยัง',
			translation: 'but also',
			pronunciation: 'dae-YANG',
			example:
				'การออกกำลังกายนอกจากทำให้ร่างกายแข็งแรง แต่ยังช่วยผ่อนคลายจิตใจ. (Exercise makes the body strong, but also helps relax the mind.)',
			synonym: ['อีกทั้งยัง (as well as)'],
			antonym: [],
		},
		{
			word: 'แม้แต่',
			translation: 'even',
			pronunciation: 'mae-DAE',
			example:
				'ถนนสายนี้มืดสนิทในตอนดึก แม้แต่คนในพื้นที่ก็ยังไม่กล้าเดินผ่าน. (This road is pitch dark late at night; even locals do not dare walk through.)',
			synonym: ['กระทั่ง (even so)'],
			antonym: [],
		},
		{
			word: 'มากเท่ากับ',
			translation: 'as much as',
			pronunciation: 'maak-thao-GAP',
			example:
				'เขาทำงานหนักเพื่อความก้าวหน้า มากเท่ากับที่เขาใส่ใจดูแลครอบครัว. (He works hard for advancement, as much as he cares for his family.)',
			synonym: ['เทียบเท่า (on par with)'],
			antonym: [],
		},
		{
			word: 'อย่างไรก็ตาม',
			translation: 'however',
			pronunciation: 'yaang-rai-gaw-DTAAM',
			example:
				'เส้นทางขึ้นเขาชันและลื่น อย่างไรก็ตามพวกเขาก็เดินขึ้นไปถึงยอดได้. (The mountain trail was steep and slick; however, they reached the summit.)',
			synonym: ['ทว่า (nevertheless)'],
			antonym: [],
		},
		{
			word: 'แม้ว่ามากเพียงใด',
			translation: 'no matter how much',
			pronunciation: 'mae-waa-maak-pheeang-DAI',
			example:
				'แม้ว่ามากเพียงใดก็ตาม เราก็จะไม่ยอมแพ้ต่ออุปสรรคตรงหน้า. (No matter how much hardship there is, we will not surrender to obstacles.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ดังนั้นจึง',
			translation: 'so that',
			pronunciation: 'dang-nan-JEUNG',
			example:
				'สะพานไม้ชำรุดเสียหาย ดังนั้นจึงต้องปิดการจราจรชั่วคราวเพื่อซ่อมแซม. (The wooden bridge was damaged, so that traffic had to be closed for repairs.)',
			synonym: ['ด้วยเหตุนี้จึง (consequently)'],
			antonym: [],
		},
		{
			word: 'ด้วยวิธีที่',
			translation: 'in such a way that',
			pronunciation: 'duai-wi-thee-THEE',
			example:
				'ช่างไม้ออกแบบโต๊ะพับ ด้วยวิธีที่สามารถประหยัดพื้นที่จัดเก็บได้มาก. (The carpenter designed folding tables in such a way that stores compactly.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เพราะฉะนั้น',
			translation: 'therefore',
			pronunciation: 'phraw-cha-NAN',
			example:
				'เราต้องเผื่อเวลาเดินทางช่วงเช้า เพราะฉะนั้นควรตื่นนอนก่อนหกโมง. (We must budget morning commute time; therefore, we should wake up before six.)',
			synonym: ['ดังนั้น (hence)'],
			antonym: [],
		},
		{
			word: 'เนื่องจากว่า',
			translation: 'due to the fact that',
			pronunciation: 'neuang-jaak-WAA',
			example:
				'โรงเรียนต้องปิดการสอนชั่วคราว เนื่องจากว่ามีน้ำท่วมขังรอบอาคาร. (The school suspended classes due to the fact that floodwaters surrounded the halls.)',
			synonym: ['เหตุเพราะว่า (by reason that)'],
			antonym: [],
		},
		{
			word: 'ถ้า...ก็',
			translation: 'provided that',
			pronunciation: 'thaa...GAW',
			example:
				'ถ้าคุณเตรียมเอกสารพร้อมครบถ้วน เจ้าหน้าที่ก็จะอนุมัติคำร้องทันที. (Provided that you prepare all documents, the officer will approve your request.)',
			synonym: ['หาก...ก็ (if... then)'],
			antonym: [],
		},
		{
			word: 'มิฉะนั้น',
			translation: 'otherwise',
			pronunciation: 'mi-cha-NAN',
			example:
				'คนขับรถต้องปฏิบัติตามป้ายเตือน มิฉะนั้นอาจเกิดอุบัติเหตุร้ายแรงได้. (Drivers must follow warning signs; otherwise, serious accidents may happen.)',
			synonym: ['ไม่อย่างนั้น (or else)'],
			antonym: [],
		},
		{
			word: 'ตราบเท่าที่',
			translation: 'as long as',
			pronunciation: 'draap-thao-THEE',
			example:
				'เราจะช่วยสนับสนุนทุนการศึกษา ตราบเท่าที่เขายังคงตั้งใจเล่าเรียน. (We will sponsor the scholarship as long as he remains dedicated to his studies.)',
			synonym: ['ตราบใดที่ (as long as)'],
			antonym: [],
		},
		{
			word: 'ทันทีที่',
			translation: 'as soon as',
			pronunciation: 'than-thee-THEE',
			example:
				'นักเรียนทุกคนลุกขึ้นยืนทำความเคารพ ทันทีที่ครูเดินก้าวเข้ามาในห้อง. (Students stood up greeting the teacher as soon as she walked into the room.)',
			synonym: ['พอ...ก็ (the moment that)'],
			antonym: [],
		},
		{
			word: 'นอกจากว่า',
			translation: 'except that',
			pronunciation: 'nawk-jaak-WAA',
			example:
				'พวกเราพร้อมออกเดินทางตามกำหนดเดิม นอกจากว่าสภาพอากาศจะเลวร้ายลง. (We are ready to leave on schedule, except that severe weather might intervene.)',
			synonym: ['เว้นเสียแต่ว่า (unless)'],
			antonym: [],
		},
		{
			word: 'ยิ่ง...ก็ยิ่ง',
			translation: 'the more... the more',
			pronunciation: 'ying...gaw-YING',
			example:
				'ยิ่งฝึกฝนทำโจทย์บ่อยๆ ความชำนาญในการคิดคำนวณก็ยิ่งเพิ่มขึ้น. (The more you practice solving problems, the more your math skill grows.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ในทางกลับกัน',
			translation: 'on the contrary',
			pronunciation: 'nai-thaang-GLAP-gan',
			example:
				'คนบางคนกลัวความล้มเหลว ในทางกลับกันบางคนมองว่ามันคือบทเรียนล้ำค่า. (Some people fear failure; on the contrary, others see it as a valuable lesson.)',
			synonym: ['ในทางตรงกันข้าม (conversely)'],
			antonym: [],
		},
		{
			word: 'ในทางตรงกันข้าม',
			translation: 'conversely',
			pronunciation: 'nai-thaang-drong-gan-KHAAM',
			example:
				'การนอนหลับเพียงพอทำให้สดชื่น ในทางตรงกันข้ามการอดนอนบั่นทอนสุขภาพ. (Adequate sleep refreshes; conversely, sleep deprivation ruins health.)',
			synonym: ['ในมุมกลับ (oppositely)'],
			antonym: [],
		},
		{
			word: 'มิหนำซ้ำ',
			translation: 'furthermore',
			pronunciation: 'mi-nam-SAM',
			example:
				'เขาลืมกระเป๋าสตางค์ไว้ที่บ้าน มิหนำซ้ำโทรศัพท์มือถือก็แบตเตอรี่หมดด้วย. (He forgot his wallet at home; furthermore, his phone battery ran out too.)',
			synonym: ['ซ้ำร้าย (worse still)'],
			antonym: [],
		},
		{
			word: 'แต่ทว่า',
			translation: 'nevertheless',
			pronunciation: 'dae-tha-WAA',
			example:
				'พวกเราวางแผนท่องเที่ยวไว้อย่างดี แต่ทว่าพายุฝนทำให้ต้องเปลี่ยนแผน. (We planned the trip thoroughly; nevertheless, a storm forced changes.)',
			synonym: ['ทว่า (yet)'],
			antonym: [],
		},
		{
			word: 'จนกระทั่ง',
			translation: 'until',
			pronunciation: 'jon-gra-THANG',
			example:
				'คนไข้นั่งรอตรวจอย่างใจเย็นอยู่ในคลินิก จนกระทั่งหมอเรียกชื่อเข้าห้องตรวจ. (The patient waited patiently in the clinic until the doctor called his name.)',
			synonym: ['จนถึง (till)'],
			antonym: [],
		},
		{
			word: 'ฉะนั้น',
			translation: 'consequently',
			pronunciation: 'cha-NAN',
			example:
				'สินค้าล็อตนี้ผลิตไม่ได้มาตรฐาน ฉะนั้นโรงงานจึงต้องเรียกคืนทั้งหมด. (This product lot was substandard; consequently, the plant recalled it entirely.)',
			synonym: ['ดังนั้น (therefore)'],
			antonym: [],
		},
		{
			word: 'สมมติว่า',
			translation: 'supposing that',
			pronunciation: 'som-moot-WAA',
			example:
				'สมมติว่าเรามีงบประมาณจำกัด เราควรจัดลำดับความสำคัญของงานอย่างไร. (Supposing that we have a limited budget, how should we prioritize tasks?)',
			synonym: ['หากว่า (hypothetically)'],
			antonym: [],
		},
		{
			word: 'นับตั้งแต่',
			translation: 'ever since',
			pronunciation: 'nap-dtang-DAE',
			example:
				'เขาหันมาดูแลใส่ใจสุขภาพอย่างเคร่งครัด นับตั้งแต่ฟื้นตัวจากการเจ็บป่วย. (He took strict care of his health ever since recovering from his illness.)',
			synonym: ['ตั้งแต่ (since)'],
			antonym: [],
		},
		{
			word: 'ก่อนที่',
			translation: 'before',
			pronunciation: 'gawn-THEE',
			example:
				'กรุณาตรวจเช็กสิ่งของมีค่าในกระเป๋าให้เรียบร้อย ก่อนที่จะก้าวลงจากรถแท็กซี่. (Please inspect valuables in bags before stepping out of the taxi.)',
			synonym: [],
			antonym: ['หลังจากที่ (after)'],
		},
		{
			word: 'หลังจากที่',
			translation: 'after',
			pronunciation: 'lang-jaak-THEE',
			example:
				'เขากลับมารู้สึกสดชื่นกระปรี้กระเปร่า หลังจากที่ได้อาบน้ำอุ่นและนอนพักผ่อน. (He felt refreshed after taking a warm bath and resting.)',
			synonym: [],
			antonym: ['ก่อนที่ (before)'],
		},
		{
			word: 'ไม่เพียงแต่...เท่านั้น',
			translation: 'not only... but also',
			pronunciation: 'mai-pheeang-dae...thao-NAN',
			example:
				'เขาไม่เพียงแต่พูดภาษาอังกฤษได้คล่องเท่านั้น แต่ยังสื่อสารภาษาจีนได้ดีอีกด้วย. (He not only speaks fluent English, but also communicates well in Chinese.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ถึงแม้',
			translation: 'albeit',
			pronunciation: 'theung-MAE',
			example:
				'เขายอมรับข้อเสนอในการร่วมงาน ถึงแม้จะได้รับผลตอบแทนน้อยกว่าที่คาดไว้. (He accepted the work offer, albeit with less compensation than expected.)',
			synonym: ['แม้ว่า (though)'],
			antonym: [],
		},
		{
			word: 'ทั้งๆ ที่',
			translation: 'even though',
			pronunciation: 'thang-thang-THEE',
			example:
				'เขายังคงฝืนเดินไปทำงานต่อ ทั้งๆ ที่มีอาการไข้ขึ้นสูงตั้งแต่เช้า. (He still forced himself to walk to work, even though he had a high fever.)',
			synonym: ['แม้ทั้ง (despite that)'],
			antonym: [],
		},
		{
			word: 'คือ',
			translation: 'namely',
			pronunciation: 'KHEU',
			example:
				'ปัจจัยสำคัญที่สุดในการทำงานชิ้นนี้ให้สำเร็จ คือความซื่อสัตย์และความสามัคคี. (The key factor in finishing this work, namely honesty and solidarity, is vital.)',
			synonym: ['ได้แก่ (that is)'],
			antonym: [],
		},
		{
			word: 'เผื่อว่า',
			translation: 'just in case',
			pronunciation: 'pheua-WAA',
			example:
				'พกร่มพับคันเล็กติดไว้ในกระเป๋าเป้ เผื่อว่าจะมีฝนตกลงมาระหว่างเดินทางกลับ. (Tuck a small umbrella into your bag, just in case rain falls on the way back.)',
			synonym: ['กันไว้ (in case of)'],
			antonym: [],
		},
	],
	others: [
		{
			word: 'สวัสดี คุณเป็นอย่างไร?',
			translation: 'hello, how are you?',
			pronunciation: 'sa-wat-dee khoon bpen yaang-RAI',
			example:
				"สวัสดี คุณเป็นอย่างไร? ไม่ได้เจอกันนานเลยนะ. (Hello, how are you? We haven't seen each other in a long time.)",
			synonym: [],
			antonym: [],
		},
		{
			word: 'อรุณสวัสดิ์',
			translation: 'good morning',
			pronunciation: 'a-roon-sa-WAT',
			example:
				'อรุณสวัสดิ์เพื่อนร่วมงานทุกคน ขอให้วันนี้เป็นวันที่ราบรื่น. (Good morning, all coworkers; may today be a smooth day.)',
			synonym: ['สวัสดีตอนเช้า (good morning informal)'],
			antonym: ['ราตรีสวัสดิ์ (good night)'],
		},
		{
			word: 'สวัสดีตอนบ่าย',
			translation: 'good afternoon',
			pronunciation: 'sa-wat-dee dtaawn-BAAI',
			example:
				'สวัสดีตอนบ่าย ขอเชิญทุกท่านนั่งพักดื่มน้ำเย็นก่อนเริ่มสัมมนา. (Good afternoon; please sit down and drink cold water before the seminar.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ราตรีสวัสดิ์',
			translation: 'good night',
			pronunciation: 'raa-dtree-sa-WAT',
			example:
				'ราตรีสวัสดิ์ ขอให้นอนหลับพักผ่อนอย่างสบายและฝันดี. (Good night; have a comfortable rest and sweet dreams.)',
			synonym: ['ฝันดี (sweet dreams)'],
			antonym: ['อรุณสวัสดิ์ (good morning)'],
		},
		{
			word: 'เป็นอย่างไรบ้าง?',
			translation: "how's it going?",
			pronunciation: 'bpen yaang-rai BAANG',
			example:
				"เป็นอย่างไรบ้าง? การเริ่มงานในสัปดาห์แรกราบรื่นดีไหม. (How's it going? Did your first week of work go smoothly?)",
			synonym: ['สบายดีไหม (are you well?)'],
			antonym: [],
		},
		{
			word: 'มีอะไรใหม่?',
			translation: "what's up?",
			pronunciation: 'mee a-rai MAI',
			example:
				"มีอะไรใหม่? ได้ข่าวว่าเพิ่งย้ายไปอยู่บ้านหลังใหม่แถบชานเมือง. (What's up? I heard you recently moved into a new suburban house.)",
			synonym: [],
			antonym: [],
		},
		{
			word: 'ยินดีที่ได้รู้จัก',
			translation: 'nice to meet you',
			pronunciation: 'yin-dee thee daai roo-JAK',
			example:
				'ยินดีที่ได้รู้จัก หวังว่าพวกเราจะได้ร่วมงานกันอย่างราบรื่นในโครงการนี้. (Nice to meet you; I hope we work smoothly together on this project.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เจอกันใหม่',
			translation: 'see you later',
			pronunciation: 'joer gan MAI',
			example:
				'วันนี้ต้องรีบไปก่อนแล้ว ไว้วันพรุ่งนี้เจอกันใหม่ที่เดิมนะ. (I have to rush off today; see you later tomorrow at the same spot.)',
			synonym: ['พบกันใหม่ (see you again)'],
			antonym: [],
		},
		{
			word: 'พบกันพรุ่งนี้',
			translation: 'see you tomorrow',
			pronunciation: 'phop gan phroong-NEE',
			example:
				'เลิกงานแล้วกลับบ้านดีๆ นะ แล้วพบกันพรุ่งนี้ตอนเช้า. (Work is done, get home safe; see you tomorrow morning.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'แล้วเจอกัน',
			translation: 'see you',
			pronunciation: 'laaeo joer GAN',
			example:
				'ขอบคุณมากสำหรับกาแฟอร่อยๆ ถ้วยนี้ แล้วเจอกันสัปดาห์หน้านะ. (Thanks a lot for this delicious coffee; see you next week.)',
			synonym: ['แล้วพบกัน (see you soon)'],
			antonym: [],
		},
		{
			word: 'ลาก่อน',
			translation: 'goodbye',
			pronunciation: 'laa-GAWN',
			example:
				'ลาก่อน ขอให้เดินทางโดยสวัสดิภาพและโชคดีในการเริ่มต้นงานใหม่. (Goodbye; have a safe journey and good luck in starting your new job.)',
			synonym: ['กราบลา (farewell formal)'],
			antonym: ['สวัสดี (hello)'],
		},
		{
			word: 'ขอบคุณ',
			translation: 'thank you',
			pronunciation: 'khawp-KHOON',
			example:
				'ขอบคุณสำหรับคำแนะนำดีๆ ที่ช่วยแก้ปัญหาเรื่องงานในครั้งนี้. (Thank you for the good advice that helped solve this work issue.)',
			synonym: ['ขอบใจ (thanks informal)'],
			antonym: [],
		},
		{
			word: 'ขอบคุณมาก',
			translation: 'thank you very much',
			pronunciation: 'khawp-khoon MAAK',
			example:
				'ขอบคุณมากสำหรับการต้อนรับที่แสนอบอุ่นในบ้านของคุณ. (Thank you very much for the warm hospitality in your home.)',
			synonym: ['ขอบพระคุณ (thank you formal)'],
			antonym: [],
		},
		{
			word: 'ยินดี',
			translation: "you're welcome",
			pronunciation: 'yin-DEE',
			example:
				"ไม่เป็นไรครับ ทางเรายินดีที่ได้มีโอกาสช่วยเหลือเสมอ. (You're welcome; our team is always glad to have the chance to help.)",
			synonym: ['ยินดีด้วยใจ (gladly)'],
			antonym: [],
		},
		{
			word: 'ได้โปรด',
			translation: 'please',
			pronunciation: 'daai-BPROHT',
			example:
				'ได้โปรดลดเสียงโทรทัศน์ลงเล็กน้อย เพราะเด็กๆ กำลังนอนหลับ. (Please lower the TV volume a bit, because the children are sleeping.)',
			synonym: ['กรุณา (kindly)'],
			antonym: [],
		},
		{
			word: 'ขอโทษ',
			translation: "I'm sorry",
			pronunciation: 'khaw-THOHT',
			example:
				"ขอโทษที่ทำให้คุณต้องเสียเวลารอนานหน้าสถานีรถไฟ. (I'm sorry for making you waste time waiting long at the train station.)",
			synonym: ['ขออภัย (excuse me formal)'],
			antonym: [],
		},
		{
			word: 'ขอโทษนะ',
			translation: 'excuse me',
			pronunciation: 'khaw-thoht NA',
			example:
				'ขอโทษนะ ทางไปห้องสมุดประชาชนต้องเดินตรงไปอีกไกลไหม. (Excuse me, is it much farther to walk straight to the public library?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ขอผ่านหน่อย',
			translation: 'excuse me to pass',
			pronunciation: 'khaw phaan NAWY',
			example:
				'ทางเดินตรงนี้ค่อนข้างแคบ ขอผ่านหน่อยครับ. (This walkway is quite narrow; excuse me, let me pass, please.)',
			synonym: ['ขอทางหน่อย (make way please)'],
			antonym: [],
		},
		{
			word: 'ราคาเท่าไหร่?',
			translation: 'how much does it cost?',
			pronunciation: 'raa-khaa thao-RAI',
			example:
				'เสื้อเชิ้ตแขนยาวผ้าฝ้ายสีขาวตัวนี้ราคาเท่าไหร่? (How much does this white long-sleeved cotton shirt cost?)',
			synonym: ['กี่บาท (how many baht?)'],
			antonym: [],
		},
		{
			word: 'อยู่ที่ไหน?',
			translation: 'where is it?',
			pronunciation: 'yoo thee NAI',
			example:
				'ร้านขายยาที่เปิดตลอดยี่สิบสี่ชั่วโมงในย่านนี้อยู่ที่ไหน? (Where is the twenty-four-hour pharmacy in this neighborhood located?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันไม่เข้าใจ',
			translation: "I don't understand",
			pronunciation: 'chan mai khao-JAI',
			example:
				"กรุณาอธิบายอีกครั้งได้ไหม เพราะฉันไม่เข้าใจขั้นตอนสุดท้ายนี้เลย. (Could you explain again? I don't understand this last step at all.)",
			synonym: ["ฉันไม่เก็ท (I don't get it casual)"],
			antonym: ['ฉันเข้าใจแล้ว (I understand now)'],
		},
		{
			word: 'ช่วยฉันหน่อยได้ไหม?',
			translation: 'can you help me?',
			pronunciation: 'chuai chan nawy daai MAI',
			example:
				'กระเป๋าเดินทางใบนี้หนักเกินไป ช่วยฉันหน่อยได้ไหม? (This suitcase is too heavy; can you help me for a moment?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ตอนนี้กี่โมง?',
			translation: 'what time is it?',
			pronunciation: 'dtaawn-nee gee-MOHNG',
			example:
				'ลืมใส่นาฬิกาข้อมือมา ไม่ทราบว่าตอนนี้กี่โมงแล้ว? (I forgot my wristwatch; do you know what time it is right now?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันไม่รู้',
			translation: "I don't know",
			pronunciation: 'chan mai ROO',
			example:
				"เรื่องกำหนดการสัมมนาครั้งใหม่ฉันไม่รู้ ต้องลองถามหัวหน้าดู. (Regarding the new seminar schedule, I don't know; ask the lead.)",
			synonym: ["ฉันไม่ทราบ (I don't know polite)"],
			antonym: ['ฉันรู้ (I know)'],
		},
		{
			word: 'ฉันหิว',
			translation: "I'm hungry",
			pronunciation: 'chan HEW',
			example:
				"พวกเราเดินเที่ยวมาทั้งวันจนฉันหิวข้าวแล้วตอนนี้. (We strolled the whole day until I'm hungry for a meal right now.)",
			synonym: ["ฉันหิวข้าว (I'm hungry for rice)"],
			antonym: ["ฉันอิ่ม (I'm full)"],
		},
		{
			word: 'ฉันกระหายน้ำ',
			translation: "I'm thirsty",
			pronunciation: 'chan gra-haai-NAAM',
			example:
				"อากาศตอนบ่ายร้อนจัดจนฉันกระหายน้ำมาก ขอน้ำเย็นสักแก้วเถอะ. (Afternoon air is scorching and I'm thirsty; please give me cold water.)",
			synonym: ["ฉันหิวน้ำ (I'm thirsty casual)"],
			antonym: [],
		},
		{
			word: 'ฉันง่วงนอน',
			translation: "I'm sleepy",
			pronunciation: 'chan nguuang-NAWN',
			example:
				"เมื่อคืนนอนดึกไปหน่อย พอถึงช่วงบ่ายฉันง่วงนอนมาก. (Last night I stayed up late; by afternoon, I'm feeling very sleepy.)",
			synonym: [],
			antonym: ["ฉันตื่นตัว (I'm wide awake)"],
		},
		{
			word: 'ฉันเหนื่อย',
			translation: "I'm tired",
			pronunciation: 'chan NEUAI',
			example:
				'แบกสัมภาระขึ้นบันไดสูงชันจนฉันเหนื่อยแทบหมดแรง. (Carrying baggage up steep steps made me so tired, almost out of energy.)',
			synonym: ["ฉันเพลีย (I'm exhausted)"],
			antonym: ["ฉันสดชื่น (I'm refreshed)"],
		},
		{
			word: 'ฉันชอบมัน',
			translation: 'I like it',
			pronunciation: 'chan chawp MAN',
			example:
				'รสชาติของอาหารจานนี้เข้มข้นกลมกล่อมดี ฉันชอบมันมาก. (The flavor of this dish is rich and well-rounded; I like it a lot.)',
			synonym: ['ฉันถูกใจ (it suits me)'],
			antonym: ["ฉันไม่ชอบมัน (I don't like it)"],
		},
		{
			word: 'ฉันไม่ชอบมัน',
			translation: "I don't like it",
			pronunciation: 'chan mai chawp MAN',
			example:
				"กาแฟแก้วนี้หวานแสบคอเกินไป ฉันไม่ชอบมันเลย. (This cup of coffee is overly cloying; I don't like it at all.)",
			synonym: [],
			antonym: ['ฉันชอบมัน (I like it)'],
		},
		{
			word: 'คุณกำลังทำอะไร?',
			translation: 'what are you doing?',
			pronunciation: 'khoon gam-lang tham a-RAI',
			example:
				'เสียงเปิดเอกสารดังอยู่นาน คุณกำลังทำอะไรอยู่ในห้องทำงาน? (Paper rustling lasted a while; what are you doing in the office?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันกำลังกลับบ้าน',
			translation: "I'm going home",
			pronunciation: 'chan gam-lang glap-BAAN',
			example:
				"เลิกงานเรียบร้อยแล้วและฉันกำลังกลับบ้านทางรถไฟฟ้าใต้ดิน. (Work is done, and I'm going home via the underground subway.)",
			synonym: [],
			antonym: [],
		},
		{
			word: 'คุณพูดว่าอะไร?',
			translation: 'what did you say?',
			pronunciation: 'khoon phoot waa a-RAI',
			example:
				'ข้างนอกมีเสียงฟ้าร้องดังกลบ คุณพูดว่าอะไรนะเมื่อสักครู่นี้? (Thunder outside drowned out the sound; what did you say just now?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'พูดว่าอย่างไร?',
			translation: 'how do you say?',
			pronunciation: 'phoot waa yaang-RAI',
			example:
				'คำศัพท์คำนี้ในภาษาอังกฤษออกเสียงและพูดว่าอย่างไร? (How do you pronounce and say this vocabulary word in English?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ไม่เป็นไร',
			translation: "it's okay",
			pronunciation: 'mai-bpen-RAI',
			example:
				"ไม่ต้องกังวลเรื่องที่ทำแก้วน้ำร้าว ไม่เป็นไรเลย เดี๋ยวซื้อใหม่ได้. (Don't worry about cracking the glass; it's okay, we can buy a new one.)",
			synonym: ['ช่างมันเถอะ (never mind)'],
			antonym: [],
		},
		{
			word: 'ไปกันเถอะ',
			translation: "let's go",
			pronunciation: 'bpai gan THOE',
			example:
				"รถไฟกำลังจะเทียบชานชาลาแล้ว รีบหยิบกระเป๋าแล้วไปกันเถอะ. (The train is about to dock at the platform; grab bags and let's go.)",
			synonym: ["ออกเดินทางเถอะ (let's depart)"],
			antonym: [],
		},
		{
			word: 'ฉันคิดถึงคุณ',
			translation: 'I miss you',
			pronunciation: 'chan khit-theung KHOON',
			example:
				"ไม่ได้พบหน้ากันหลายเดือน ฉันคิดถึงคุณและครอบครัวของคุณเสมอ. (We haven't seen each other for months; I miss you and your family always.)",
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันรักคุณ',
			translation: 'I love you',
			pronunciation: 'chan rak KHOON',
			example:
				'ขอบคุณที่คอยอยู่เคียงข้างและดูแลกันเสมอมา ฉันรักคุณนะ. (Thank you for standing by and taking care of me; I love you.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ดูแลตัวเองด้วยนะ',
			translation: 'take care',
			pronunciation: 'doo-laae dtua-eeng duai NA',
			example:
				'ช่วงนี้อากาศเปลี่ยนแปลงบ่อย เดินทางไกลก็ดูแลตัวเองด้วยนะ. (The weather changes often; traveling far, take care of yourself too.)',
			synonym: ['รักษาสุขภาพด้วย (stay healthy)'],
			antonym: [],
		},
		{
			word: 'ขอแสดงความยินดี',
			translation: 'congratulations',
			pronunciation: 'khaw sa-daang khwaam-yin-DEE',
			example:
				'ขอแสดงความยินดีกับความสำเร็จในการสอบเข้ามหาวิทยาลัยในครั้งนี้. (Congratulations on your success in passing the university entrance exam.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ยินดีต้อนรับ',
			translation: 'welcome',
			pronunciation: 'yin-dee dtaawn-RAP',
			example:
				'ยินดีต้อนรับแขกผู้มีเกียรติทุกท่านเข้าสู่โรงแรมของเรา. (Welcome, honorable guests, to our hospitality hotel.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันช่วยอะไรได้บ้าง?',
			translation: 'can I help you?',
			pronunciation: 'chan chuai a-rai daai BAANG',
			example:
				'เห็นคุณยืนมองแผนที่อยู่นาน มีอะไรที่ฉันช่วยอะไรได้บ้าง? (Seeing you gaze at the map so long, is there anything I can help you with?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'อากาศร้อน',
			translation: "it's hot",
			pronunciation: 'aa-gaat RAWN',
			example:
				"วันนี้อากาศร้อนจัด ควรหลีกเลี่ยงการเดินตากแดดตอนเที่ยงวัน. (Today it's hot; one should avoid walking under the midday sun.)",
			synonym: [],
			antonym: ["อากาศหนาว (it's cold)"],
		},
		{
			word: 'อากาศหนาว',
			translation: "it's cold",
			pronunciation: 'aa-gaat NAAO',
			example:
				"บนยอดดอยอากาศหนาวมากในตอนกลางคืนจนน้ำค้างกลายเป็นเกล็ด. (On the mountain summit it's cold at night until dew turns to frost.)",
			synonym: [],
			antonym: ["อากาศร้อน (it's hot)"],
		},
		{
			word: 'สุขสันต์วันเกิด',
			translation: 'happy birthday',
			pronunciation: 'sook-san wan-GOET',
			example:
				'สุขสันต์วันเกิด ขอให้มีสุขภาพแข็งแรงและมีความสุขตลอดปี. (Happy birthday; may you enjoy robust health and happiness all year long.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'โชคดี',
			translation: 'good luck',
			pronunciation: 'chohk-DEE',
			example:
				'ขอให้โชคดีและทำคะแนนได้ยอดเยี่ยมในการสอบชิงทุนพรุ่งนี้นะ. (Good luck, and score excellently on your scholarship exam tomorrow.)',
			synonym: ['ขอให้โชคเข้าข้าง (may fortune favor you)'],
			antonym: ['โชคร้าย (bad luck)'],
		},
		{
			word: 'แล้วเจอกันเร็วๆ นี้',
			translation: 'see you soon',
			pronunciation: 'laaeo joer gan reo-reo NEE',
			example:
				'ยินดีที่ได้คุยกันนะ ไว้หายเหนื่อยแล้วเจอกันเร็วๆ นี้เพื่อทานข้าว. (Glad we chatted; once rested, see you soon to have a meal.)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'ฉันเห็นด้วย',
			translation: 'I agree',
			pronunciation: 'chan hen DUAI',
			example:
				'แผนการปรับปรุงพื้นที่ส่วนกลางนี้น่าสนใจมาก และฉันเห็นด้วยทุกข้อ. (This plan to renovate common areas is interesting, and I agree on all points.)',
			synonym: ['เห็นพ้องต้องกัน (in agreement)'],
			antonym: ['ฉันคัดค้าน (I disagree)'],
		},
		{
			word: 'ฉันไม่แน่ใจ',
			translation: "I'm not sure",
			pronunciation: 'chan mai nae-JAI',
			example:
				"เรื่องเวลาเปิดปิดของร้านวันหยุดนี้ฉันไม่แน่ใจ ต้องโทรเช็กก่อน. (Regarding weekend store hours, I'm not sure; we must call first.)",
			synonym: ['ยังลังเลอยู่ (still hesitant)'],
			antonym: ["ฉันมั่นใจ (I'm sure)"],
		},
		{
			word: 'แน่นอน',
			translation: 'of course',
			pronunciation: 'nae-NAWN',
			example:
				"ถ้าคุณต้องการความช่วยเหลือเรื่องงานแปลเอกสาร ฉันยินดีช่วยแน่นอน. (If you need assistance with document translation, of course I'll help.)",
			synonym: ['ย่อมเป็นเช่นนั้น (undoubtedly)'],
			antonym: [],
		},
		{
			word: 'แน่นอนอยู่แล้ว',
			translation: 'of course it is',
			pronunciation: 'nae-nawn yoo LAAEO',
			example:
				'การรับประทานอาหารที่มีประโยชน์ย่อมดีต่อสุขภาพแน่นอนอยู่แล้ว. (Eating nutritious meals is good for health, of course it is.)',
			synonym: ['แน่แท้ (without doubt)'],
			antonym: [],
		},
		{
			word: 'ไม่รู้เลย',
			translation: 'no idea',
			pronunciation: 'mai roo LOEI',
			example:
				'เรื่องที่เขาย้ายแผนกไปทำงานสาขาอื่นเมื่อเช้านี้ ฉันไม่รู้เลยจริงๆ. (About him transferring to another branch this morning, I had no idea.)',
			synonym: ['ไม่มีเบาะแส (clueless)'],
			antonym: [],
		},
		{
			word: 'ล้อเล่นใช่ไหม',
			translation: "it's a joke right?",
			pronunciation: 'law-len chai MAI',
			example:
				"คุณบอกว่าจะลาออกจากงานสิ้นเดือนนี้ ล้อเล่นใช่ไหมเนี่ย? (You said you're resigning at the end of the month; it's a joke, right?)",
			synonym: ['พูดเล่นหรือเปล่า (are you kidding?)'],
			antonym: [],
		},
		{
			word: 'ฉันรีบ',
			translation: "I'm in a hurry",
			pronunciation: 'chan REEP',
			example:
				"ขบวนรถไฟใกล้จะออกจากชานชาลาแล้ว ขอตัวก่อนนะเพราะฉันรีบ. (The train is departing the platform; excuse me, I'm in a hurry.)",
			synonym: ['มีธุระด่วน (on urgent errands)'],
			antonym: [],
		},
		{
			word: 'ระวังนะ',
			translation: 'be careful',
			pronunciation: 'ra-wang NA',
			example:
				'พื้นบันไดหน้าบ้านเพิ่งขัดใหม่และยังเปียกลื่นอยู่ เดินก้าวระวังนะ. (The front stairs were just polished and are slippery; walk, be careful.)',
			synonym: ['รอบคอบหน่อย (watch out)'],
			antonym: [],
		},
		{
			word: 'เขายุ่งอยู่',
			translation: 'he is busy',
			pronunciation: 'khao yoong YOO',
			example:
				"อย่าเพิ่งเข้าไปรบกวนในห้องทำงานตอนนี้เลย เขายุ่งอยู่กับการตรวจแบบ. (Don't disturb the office right now; he is busy checking blueprints.)",
			synonym: ['ติดธุระ (preoccupied)'],
			antonym: ['เขาว่าง (he is free)'],
		},
		{
			word: 'ไม่ต้องกังวล',
			translation: "don't worry",
			pronunciation: 'mai dtawng gang-WON',
			example:
				"เรามีทีมงานคอยดูแลตรวจเช็กความปลอดภัยตลอดงาน ไม่ต้องกังวลนะ. (We have safety teams checking continuously; don't worry.)",
			synonym: ['สบายใจได้ (rest assured)'],
			antonym: [],
		},
		{
			word: 'มันเป็นยังไงบ้าง?',
			translation: 'how was it?',
			pronunciation: 'man bpen yang-ngai BAANG',
			example:
				'เมื่อวานไปร่วมงานนิทรรศการศิลปะร่วมสมัยมา มันเป็นยังไงบ้าง? (You attended the contemporary art exhibition yesterday; how was it?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'คุณคิดว่าไง?',
			translation: 'what do you think?',
			pronunciation: 'khoon khit waa NGAI',
			example:
				'สีทาห้องนั่งเล่นเฉดสีเทาอ่อนดูสบายตาดีนะ คุณคิดว่าไง? (Light gray paint for the living room looks soothing; what do you think?)',
			synonym: ['มีความเห็นอย่างไร (what is your view?)'],
			antonym: [],
		},
		{
			word: 'บอกฉันเพิ่มเติม',
			translation: 'tell me more',
			pronunciation: 'bawk chan phoem-DTEEM',
			example:
				'โครงการท่องเที่ยวชุมชนนี้น่าสนใจมาก ช่วยบอกฉันเพิ่มเติมหน่อยสิ. (This community tourism project is very neat; please tell me more.)',
			synonym: ['เล่ารายละเอียดให้ฟัง (give details)'],
			antonym: [],
		},
		{
			word: 'มันเป็นไปไม่ได้',
			translation: "it's impossible",
			pronunciation: 'man bpen bpai mai DAAI',
			example:
				"จะเดินเท้าขึ้นยอดดอยสูงชันให้ทันภายในครึ่งชั่วโมง มันเป็นไปไม่ได้หรอก. (Hiking the steep peak in thirty minutes; it's impossible.)",
			synonym: ['เหลือวิสัย (beyond capability)'],
			antonym: ["เป็นไปได้ (it's possible)"],
		},
		{
			word: 'นานมาแล้ว',
			translation: 'a long time ago',
			pronunciation: 'naan maa LAAEO',
			example:
				'บ้านไม้ทรงไทยโบราณหลังนี้ถูกสร้างขึ้นมาตั้งแต่เมื่อนานมาแล้ว. (This traditional Thai wooden house was built a long time ago.)',
			synonym: ['ในอดีต (in the past)'],
			antonym: ['เร็วๆ นี้ (recently)'],
		},
		{
			word: 'แล้วเจอกันทีหลัง',
			translation: 'see you later',
			pronunciation: 'laaeo joer gan thee-LANG',
			example:
				'ฉันต้องรีบไปส่งพัสดุที่ไปรษณีย์ก่อน แล้วเจอกันทีหลังที่ร้านกาแฟนะ. (I must ship parcels at the post office first; see you later at the cafe.)',
			synonym: ['ไว้พบกันใหม่ (see you again)'],
			antonym: [],
		},
		{
			word: 'จริงเหรอ?',
			translation: 'really?',
			pronunciation: 'jing ROE',
			example:
				'คุณบอกว่าตั๋วเครื่องบินไปเชียงใหม่ลดราคาครึ่งหนึ่ง จริงเหรอ? (You said flight tickets to Chiang Mai are half off; really?)',
			synonym: ['แท้จริงหรือ (is that so?)'],
			antonym: [],
		},
		{
			word: 'น่าประหลาดใจจัง',
			translation: 'what a surprise',
			pronunciation: 'naa bpra-laat-jai JANG',
			example:
				'ไม่คิดว่าจะได้พบเพื่อนเก่าสมัยมัธยมที่นี่ น่าประหลาดใจจังเลย. (Never thought of meeting high school friends here; what a surprise.)',
			synonym: ['น่าอัศจรรย์ (astonishing)'],
			antonym: [],
		},
		{
			word: 'เดี๋ยวก็รู้',
			translation: "we'll see",
			pronunciation: 'deeao gaw ROO',
			example:
				"ไม่ต้องรีบคาดเดาผลการแข่งขันหรอก รอประกาศคะแนนเดี๋ยวก็รู้. (Don't rush to guess match outcomes; wait for scores, we'll see.)",
			synonym: ["รอดูกันต่อไป (let's watch)"],
			antonym: [],
		},
		{
			word: 'ไม่มีปัญหา',
			translation: 'no problem',
			pronunciation: 'mai mee bpan-HAA',
			example:
				'ถ้าต้องการยืมหนังสือเล่มนี้ไปอ่านต่อที่บ้าน ไม่มีปัญหาเลย เอาไปได้. (If you want to borrow this book to read at home, no problem, take it.)',
			synonym: ['ยินดีจัดการให้ (glad to arrange)'],
			antonym: [],
		},
		{
			word: 'ฉันไม่ถือสา',
			translation: "I don't mind",
			pronunciation: 'chan mai theu-SAA',
			example:
				"คุณจะเปิดหน้าต่างรับลมธรรมชาติก็ได้นะ ฉันไม่ถือสาเรื่องเสียงลม. (You can open windows for natural breezes; I don't mind wind noise.)",
			synonym: ['ไม่ติดใจ (no hard feelings)'],
			antonym: [],
		},
		{
			word: 'หวังว่า',
			translation: 'hopefully',
			pronunciation: 'wang WAA',
			example:
				"ท้องฟ้าเริ่มโปร่งแล้ว หวังว่าเย็นนี้ฝนจะไม่ตกลงมาขัดจังหวะงานเดินเล่น. (Skies are clearing; hopefully, rain won't interrupt our evening walk.)",
			synonym: ['คาดหมายว่า (anticipating that)'],
			antonym: [],
		},
		{
			word: 'ไม่มีทาง',
			translation: 'no way',
			pronunciation: 'mai mee THAANG',
			example:
				"ให้ยอมแพ้ต่อความอยุติธรรมแบบนั้นน่ะหรือ ไม่มีทางยอมเด็ดขาด. (Giving in to injustice like that? There is no way I'd ever accept it.)",
			synonym: ['เป็นไปไม่ได้เด็ดขาด (totally impossible)'],
			antonym: [],
		},
		{
			word: 'ตามที่คุณต้องการ',
			translation: 'as you wish',
			pronunciation: 'dtaam thee khoon dtawng-GAAN',
			example:
				'ช่างตัดเสื้อจะจัดทรงชุดตามที่คุณต้องการอย่างประณีตที่สุด. (The tailor will craft the outfit as you wish with utmost precision.)',
			synonym: ['ตามใจคุณ (at your pleasure)'],
			antonym: [],
		},
		{
			word: 'แล้วแต่',
			translation: 'it depends',
			pronunciation: 'laaeo-DTAE',
			example:
				'เรื่องจะแวะทานมื้อเย็นที่ไหนก่อนกลับบ้าน ก็แล้วแต่ความสะดวกของทุกคน. (Deciding where to grab dinner on the way home, it depends on everyone.)',
			synonym: ['ขึ้นอยู่กับ (contingent upon)'],
			antonym: [],
		},
		{
			word: 'น่าเสียดาย',
			translation: 'what a shame',
			pronunciation: 'naa seea-DAAI',
			example:
				'ฝนตกกระหน่ำจนต้องยกเลิกงานแสดงดนตรีกลางแจ้ง น่าเสียดายจริงๆ. (Pouring rain canceled the outdoor music concert; what a shame.)',
			synonym: ['น่าเสียดายยิ่ง (regrettable)'],
			antonym: [],
		},
		{
			word: 'โชคร้ายจัง',
			translation: 'what bad luck',
			pronunciation: 'chohk-raai JANG',
			example:
				'เดินสะดุดก้อนหินจนโทรศัพท์ตกลงไปในท่อระบายน้ำ โชคร้ายจังเลย. (Tripping on stones until the phone fell into the drain; what bad luck.)',
			synonym: ['เคราะห์ร้ายจริง (unfortunate)'],
			antonym: ['โชคดีจัง (what good luck)'],
		},
		{
			word: 'เหลือเชื่อเลย',
			translation: "it's incredible",
			pronunciation: 'leua-cheua LOEI',
			example:
				"เขาสามารถวิ่งมาราธอนจบได้โดยไม่หยุดพัก เหลือเชื่อเลยจริงๆ. (He finished the marathon without a single rest; it's incredible.)",
			synonym: ['มหัศจรรย์ยิ่ง (miraculous)'],
			antonym: [],
		},
		{
			word: 'ฉันแทบรอไม่ไหว',
			translation: "I can't wait",
			pronunciation: 'chan thaep raw mai WAI',
			example:
				"พรุ่งนี้จะได้ออกเดินทางไปเที่ยวทะเลเกาะสมุยแล้ว ฉันแทบรอไม่ไหว. (Heading off to Samui island beach tomorrow; I can't wait.)",
			synonym: ['ใจจดใจจ่อ (eagerly anticipating)'],
			antonym: [],
		},
		{
			word: 'ขำจะตาย',
			translation: 'dying of laughter',
			pronunciation: 'kham ja DTAAI',
			example:
				'ดูนักแสดงตลกเล่าเรื่องวีรกรรมวัยเด็ก ขำจะตายจนน้ำตาไหล. (Watching comedians recount childhood antics, I was dying of laughter.)',
			synonym: ['ตลกขบขันมาก (hilarious)'],
			antonym: [],
		},
		{
			word: 'ไอเดียดีจัง',
			translation: 'what a good idea',
			pronunciation: 'ai-dee-a dee JANG',
			example:
				'การนำของเหลือใช้มารีไซเคิลเป็นกระถางต้นไม้ ไอเดียดีจังเลยนะ. (Recycling discarded containers into plant pots; what a good idea.)',
			synonym: ['ความคิดสร้างสรรค์ดี (creative thought)'],
			antonym: [],
		},
		{
			word: 'อร่อยจัง',
			translation: 'how delicious',
			pronunciation: 'a-rawy JANG',
			example:
				'ต้มยำกุ้งน้ำข้นชามนี้รสชาติจัดจ้านถึงเครื่อง อร่อยจังเลย. (This rich shrimp tom yum is boldly spiced; how delicious!)',
			synonym: ['รสเลิศ (superb taste)'],
			antonym: [],
		},
		{
			word: 'จำเป็น',
			translation: "it's necessary",
			pronunciation: 'jam-BPEN',
			example:
				"การตรวจสอบสภาพรถยนต์ก่อนออกเดินทางไกล จำเป็นต่อความปลอดภัย. (Inspecting the car before long drives; it's necessary for safety.)",
			synonym: ['ขาดไม่ได้ (essential)'],
			antonym: ['ไม่จำเป็น (unnecessary)'],
		},
		{
			word: 'ชีวิตก็เป็นแบบนี้แหละ',
			translation: "that's life",
			pronunciation: 'chee-wit gaw bpen baep-nee LAE',
			example:
				"มีทั้งวันที่สุขและวันที่เจอปัญหาปะปนกันไป ชีวิตก็เป็นแบบนี้แหละ. (Days of happiness blend with trouble; that's life.)",
			synonym: ["เป็นเรื่องธรรมดา (it's natural)"],
			antonym: [],
		},
		{
			word: 'สวยจังเลย',
			translation: 'how beautiful',
			pronunciation: 'suai jang LOEI',
			example:
				'ทุ่งดอกทานตะวันสีเหลืองอร่ามตัดกับท้องฟ้าสีคราม สวยจังเลย. (Golden sunflower plains contrasted against blue skies; how beautiful!)',
			synonym: ['งดงามจับใจ (breathtakingly pretty)'],
			antonym: [],
		},
		{
			word: 'โชคดีจัง',
			translation: 'what luck',
			pronunciation: 'chohk-dee JANG',
			example:
				'วิ่งมาถึงชานชาลาก่อนที่ประตูรถไฟขบวนสุดท้ายจะปิด โชคดีจัง. (Reaching the platform before the last train doors shut; what luck!)',
			synonym: ['เฮงจริง (fortunate)'],
			antonym: ['โชคร้ายจัง (what bad luck)'],
		},
		{
			word: 'ฉันไม่อยากทำ',
			translation: "I don't want to do it",
			pronunciation: 'chan mai yaak THAM',
			example:
				"งานที่เอาเปรียบคนอื่นแบบนั้น ฉันไม่อยากทำและจะไม่เข้าร่วมเด็ดขาด. (Work exploiting others like that, I don't want to do it at all.)",
			synonym: [],
			antonym: [],
		},
		{
			word: 'พอแล้ว',
			translation: 'enough already',
			pronunciation: 'phaw LAAEO',
			example:
				'รับประทานอาหารจนอิ่มแน่นท้องแล้ว ขอบคุณมาก พอแล้วครับ. (Ate until completely stuffed; thank you very much, enough already.)',
			synonym: ['อิ่มแปล้แล้ว (fully sated)'],
			antonym: [],
		},
		{
			word: 'ใจเย็นๆ',
			translation: 'take it easy',
			pronunciation: 'jai yen-YEN',
			example:
				"อย่าเพิ่งด่วนตัดสินใจตอนที่อารมณ์ยังร้อนอยู่ ใจเย็นๆ แล้วค่อยคุยกัน. (Don't rush choices while heated; take it easy, then talk.)",
			synonym: ['ค่อยๆ คิด (think slowly)'],
			antonym: ['ใจร้อน (hot-tempered)'],
		},
		{
			word: 'น่าอายจัง!',
			translation: 'how embarrassing!',
			pronunciation: 'naa aai JANG',
			example:
				'เผลอจำคนผิดแล้วเดินเข้าไปทักทายเสียงดังกลางห้าง น่าอายจัง! (Mistook a stranger and greeted aloud in the mall; how embarrassing!)',
			synonym: ['ขายหน้าจริง (humiliating)'],
			antonym: [],
		},
		{
			word: 'คุณทำให้ฉันคลั่ง',
			translation: 'you drive me crazy',
			pronunciation: 'khoon tham hai chan KHLANG',
			example:
				'เปิดเพลงเสียงเบสกระหึ่มทั้งคืนโดยไม่หลับไม่นอน คุณทำให้ฉันคลั่ง. (Blasting booming bass music all night without sleeping, you drive me crazy.)',
			synonym: ['ปั่นประสาท (maddening)'],
			antonym: [],
		},
		{
			word: 'ฉันไม่รำคาญ',
			translation: "it doesn't bother me",
			pronunciation: 'chan mai ram-KHAAN',
			example:
				"เด็กๆ จะวิ่งเล่นส่งเสียงเจื้อยแจ้วในสวนก็ปล่อยเขาเถอะ ฉันไม่รำคาญ. (Children chattering playfully in the yard is fine; it doesn't bother me.)",
			synonym: [],
			antonym: ['ฉันรำคาญ (it bothers me)'],
		},
		{
			word: 'คุณสัญญากับฉันไหม?',
			translation: 'do you promise me?',
			pronunciation: 'khoon san-yaa gap chan MAI',
			example:
				'ถ้าเล่าความลับเรื่องนี้ให้ฟังแล้ว คุณสัญญากับฉันไหมว่าจะไม่บอกใครต่อ? (If I share this secret, do you promise me not to tell anyone?)',
			synonym: [],
			antonym: [],
		},
		{
			word: 'เผื่อไว้ก่อน',
			translation: 'just in case',
			pronunciation: 'pheua wai GAWN',
			example:
				'พกขวดน้ำดื่มและยาดมติดกระเป๋าเป้ไปด้วย เผื่อไว้ก่อนตอนเดินป่า. (Carry water bottles and inhalers in your bag, just in case, while trekking.)',
			synonym: ['เตรียมพร้อมไว้ (be prepared)'],
			antonym: [],
		},
		{
			word: 'ฝนกำลังตก',
			translation: "it's raining",
			pronunciation: 'fon gam-lang DTOK',
			example:
				"อย่าเพิ่งรีบเดินออกไปข้างนอกตัวอาคารเลย ตอนนี้ฝนกำลังตกหนัก. (Don't rush out of the building yet; right now it's raining heavily.)",
			synonym: [],
			antonym: ['ฝนหยุดตก (rain stopped)'],
		},
		{
			word: 'มีแดด',
			translation: "it's sunny",
			pronunciation: 'mee DAET',
			example:
				"ซักผ้าห่มและนำออกไปตากที่ระเบียงได้เลย เพราะวันนี้มีแดดออกทั้งวัน. (Wash blankets and hang them on the balcony; it's sunny all day.)",
			synonym: ['แดดจ้า (sunlit)'],
			antonym: ['มืดครึ้ม (overcast)'],
		},
		{
			word: 'เดี๋ยวค่อยดู',
			translation: "let's see",
			pronunciation: 'deeao khawy DOO',
			example:
				"ถ้าช่วงบ่ายมีเวลาว่างเหลือพอ เดี๋ยวค่อยดูว่าจะแวะไปร้านหนังสือไหม. (If time permits in the afternoon, let's see whether to visit bookstores.)",
			synonym: ['รอดูสถานการณ์ (wait and see)'],
			antonym: [],
		},
		{
			word: 'ฉันมีคำถาม',
			translation: 'I have a question',
			pronunciation: 'chan mee kham-THAAM',
			example:
				'ขออนุญาตยกมือขัดจังหวะการบรรยายสักครู่ครับ พอดีฉันมีคำถาม. (Pardon my interrupting the lecture for a moment; I have a question.)',
			synonym: ['มีข้อสงสัย (have doubts)'],
			antonym: [],
		},
		{
			word: 'น่าเบื่อจัง',
			translation: 'how boring',
			pronunciation: 'naa-buea JANG',
			example:
				'ต้องนั่งติดแหง็กอยู่บนรถเมล์ท่ามกลางการจราจรติดขัด น่าเบื่อจัง. (Sitting stuck on a city bus amidst gridlocked traffic; how boring.)',
			synonym: ['ซ้ำซากจำเจ (dull)'],
			antonym: ['น่าสนุกจัง (how fun)'],
		},
		{
			word: 'น่าตื่นเต้นจัง',
			translation: 'how exciting',
			pronunciation: 'naa dteun-dten JANG',
			example:
				'ได้ตั๋วไปชมการแข่งขันฟุตบอลรอบชิงชนะเลิศในสนามจริง น่าตื่นเต้นจัง. (Got stadium tickets to see the finals live; how exciting!)',
			synonym: ['เร้าใจยิ่ง (thrilling)'],
			antonym: ['น่าเบื่อจัง (how boring)'],
		},
		{
			word: 'ยินดีด้วยนะ',
			translation: 'congratulations',
			pronunciation: 'yin-dee duai NA',
			example:
				'ทราบข่าวว่าเธอสอบได้ทุนไปเรียนต่อ ยินดีด้วยนะเพื่อนรัก. (Heard news you won study grants abroad; congratulations, my dear friend.)',
			synonym: ['ขอแสดงความยินดี (formal congratulations)'],
			antonym: [],
		},
		{
			word: 'ขอโทษจริงๆ',
			translation: 'truly sorry',
			pronunciation: 'khaw-thoht jing-JING',
			example:
				'ฉันทำแก้วกาแฟใบโปรดของคุณตกแตก ขอโทษจริงๆ นะ. (I dropped and broke your prized coffee mug; truly sorry.)',
			synonym: ['กราบขออภัย (deepest apologies)'],
			antonym: [],
		},
		{
			word: 'ไม่เป็นไรเลย',
			translation: 'not at all an issue',
			pronunciation: 'mai bpen rai LOEI',
			example:
				'ไม่ต้องคิดมากเรื่องที่เกิดขึ้น ทุกคนเข้าใจดี ไม่เป็นไรเลย. (Do not overthink what happened; all understand well, not at all an issue.)',
			synonym: ['เรื่องเล็กน้อย (minor matter)'],
			antonym: [],
		},
		{
			word: 'เจอกันใหม่นะ',
			translation: 'see you again',
			pronunciation: 'joer gan mai NA',
			example:
				'ขอบคุณสำหรับการต้อนรับที่แสนอบอุ่นในวันนี้ เจอกันใหม่นะ. (Thank you for the wonderful warm hosting today; see you again.)',
			synonym: ['แล้วพบกันใหม่ (until we meet)'],
			antonym: [],
		},
		{
			word: 'ฝันดีนะ',
			translation: 'sweet dreams',
			pronunciation: 'fan-dee NA',
			example:
				'ดึกมากแล้ว รีบเข้านอนพักผ่อนได้แล้ว ฝันดีนะทุกคน. (It is very late; hurry off to sleep and rest now, sweet dreams to everyone.)',
			synonym: ['ราตรีสวัสดิ์ (good night)'],
			antonym: [],
		},
		{
			word: 'เดินทางปลอดภัย',
			translation: 'safe travels',
			pronunciation: 'doen-thaang bplawt-PHAI',
			example:
				'ขอให้ทริปท่องเที่ยวต่างจังหวัดราบรื่น เดินทางปลอดภัยนะ. (May your provincial road trip go smoothly; safe travels.)',
			synonym: ['แคล้วคลาดปลอดภัย (safe passage)'],
			antonym: [],
		},
		{
			word: 'ตามสบายนะ',
			translation: 'make yourself comfortable',
			pronunciation: 'dtaam-sa-baai NA',
			example:
				'นั่งพักดื่มน้ำเย็นในห้องรับแขกก่อนได้เลย ตามสบายนะเพื่อน. (Sit down and drink cold water in the parlor first; make yourself comfortable, friend.)',
			synonym: ['ไม่ต้องเกรงใจ (feel at home)'],
			antonym: [],
		},
		{
			word: 'รอสักครู่',
			translation: 'wait a moment',
			pronunciation: 'raw sak-KHROO',
			example:
				'เจ้าหน้าที่กำลังค้นหาแฟ้มประวัติของคุณในระบบ รอสักครู่นะครับ. (The clerk is searching your profile folder in the database; wait a moment.)',
			synonym: ['รอเดี๋ยวนะ (hold on a sec)'],
			antonym: [],
		},
		{
			word: 'ช่วยด้วย!',
			translation: 'help!',
			pronunciation: 'chuai DUAI',
			example:
				'มีคนพลัดตกน้ำข้างสะพาน ใครอยู่ใกล้ช่วยด้วย! (Someone fell into the water by the bridge; whoever is nearby, help!)',
			synonym: ['ช่วยน้ำท่วม (assist)'],
			antonym: [],
		},
		{
			word: 'ระวังรถด้วย',
			translation: 'watch out for cars',
			pronunciation: 'ra-wang rot DUAI',
			example:
				'เวลาเดินข้ามถนนตรงทางม้าลายต้องมองซ้ายขวา ระวังรถด้วยนะ. (When crossing streets at zebra lines look both ways; watch out for cars.)',
			synonym: ['ดูรถด้วย (look out for cars)'],
			antonym: [],
		},
		{
			word: 'ช้าลงหน่อย',
			translation: 'slow down a bit',
			pronunciation: 'chaa long NAWY',
			example:
				'ถนนลื่นและมีฝนตกพรำๆ กรุณาขับรถช้าลงหน่อยเพื่อความปลอดภัย. (Roads are slick and it drizzles; please slow down a bit for safety.)',
			synonym: ['ชะลอความเร็ว (reduce speed)'],
			antonym: ['เร็วขึ้นหน่อย (speed up a bit)'],
		},
		{
			word: 'เร็วเข้าเถอะ',
			translation: 'hurry up',
			pronunciation: 'reo khao THOE',
			example:
				'รถไฟกำลังจะเทียบชานชาลาแล้ว พวกเรารีบก้าวเท้าเร็วเข้าเถอะ. (The train is about to dock platforms; let us pick up pace, hurry up.)',
			synonym: ['รีบหน่อย (make haste)'],
			antonym: ['ใจเย็นๆ (take it easy)'],
		},
		{
			word: 'สู้ๆ นะ',
			translation: 'keep fighting',
			pronunciation: 'soo-soo NA',
			example:
				'การสอบรอบนี้ไม่ยากเกินความพยายาม ตั้งใจทำให้ดี สู้ๆ นะ. (This test round is not beyond your effort; do your best, keep fighting.)',
			synonym: ['อย่ายอมแพ้ (do not give up)'],
			antonym: [],
		},
		{
			word: 'ขอทางหน่อยครับ',
			translation: 'excuse me, make way',
			pronunciation: 'khaw thaang nawy KHRAP',
			example:
				'คนยืนรอหนาแน่นหน้าประตูลิฟต์ ขอทางหน่อยครับเพื่อเดินออก. (Crowds stand dense by elevator doors; excuse me, make way to step out.)',
			synonym: ['ขอผ่านทาง (pardon to pass)'],
			antonym: [],
		},
		{
			word: 'เป็นห่วงนะ',
			translation: 'worried about you',
			pronunciation: 'bpen huang NA',
			example:
				'ฝนตกหนักอย่าลืมพกร่มและรักษาสุขภาพด้วย เป็นห่วงนะเพื่อน. (Heavy rain falling, remember to pack umbrellas and stay healthy; worried about you, friend.)',
			synonym: ['คิดถึงความปลอดภัย (concerned for safety)'],
			antonym: [],
		},
	],
};
const targets = [
	'verbs',
	'nouns',
	'adjectives',
	'adverbs',
	'pronouns',
	'verbs',
	'prepositions',
	'conjunctions',
	'others',
];

const words = [];
let halt = true;
let limit = 2000;

do {
	halt = true;
	for (const target of targets) {
		const entry = thaiVocabulary[target].shift();
		if (entry) {
			halt = false;
			const { word, translation, example } = entry;

			const [sentence, sentenceTranslation] = example.split(/\s*\(/);

			words.push([
				1,
				word,
				translation,
				sentence,
				sentenceTranslation.replace(')', ''),
				target,
			]);
		}
	}
	if (limit-- === 0) throw new Error('fhisass');
} while (halt === false);
words.reverse();
let row = 1;
for (const word of words) {
	word.unshift(row++);
}
let csv = 'version: 1\n';
for (const word of words) {
	csv += `${word.join('\t')}\n`;
}
// eslint-disable-next-line no-console
console.log(csv);
