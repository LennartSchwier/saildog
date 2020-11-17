package de.neuefische.saildog.controller;

import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.Jib;
import de.neuefische.saildog.service.TrimService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TrimControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private TrimService mockedTrimService;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getJibTrimReturnsHttpStatusOk() {
        // GIVEN
        String requestParam = "?wind=3.0&&wave=2.8&course=closed_hauled";
        String url = "http://localhost:" + port + "/api/trim/jib" + requestParam;
        Jib expectedResult = new Jib(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED);

        // WHEN
        when(mockedTrimService.getJibTrim(3.0, 2.8, "closed_hauled")).thenReturn(expectedResult);
        ResponseEntity<Jib> response = restTemplate.getForEntity(url, Jib.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Jib(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED)));
    }

}