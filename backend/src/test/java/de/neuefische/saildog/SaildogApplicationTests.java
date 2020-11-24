package de.neuefische.saildog;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {
		"storm.glass.key=someSecretKey",
		"jwt.secret.key=someSecretKey"
})
class SaildogApplicationTests {

	@Test
	void contextLoads() {
	}

}
