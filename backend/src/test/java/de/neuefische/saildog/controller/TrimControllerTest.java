package de.neuefische.saildog.controller;

import de.neuefische.saildog.enums.*;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.model.MainSail;
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

    String requestParam = "?course=closed_hauled&wind=3.0&wave=2.8";

    @Test
    public void getHeadSailTrimReturnsCorrectResponse() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/trim/headsail" + requestParam;
        HeadSail expectedResult = new HeadSail(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED);

        // WHEN
        when(mockedTrimService.getHeadSailTrim("closed_hauled", 3.0, 2.8 )).thenReturn(expectedResult);
        ResponseEntity<HeadSail> response = restTemplate.getForEntity(url, HeadSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new HeadSail(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED)));
    }

    @Test
    public void getMainSailTrimReturnsCorrectResponse() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/trim/mainsail" + requestParam;
        MainSail expectedResult = MainSail.builder()
                .mainSailSheet(SheetState.LOOSE)
                .traveller(TravellerState.SLIGHTLY_LUV)
                .boomVang(BoomVangState.LOOSE)
                .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                .mainSailFoot(LuffFootState.SMOOTH)
                .build();

        // WHEN
        when(mockedTrimService.getMainSailTrim("closed_hauled", 3.0, 2.8 )).thenReturn(expectedResult);
        ResponseEntity<MainSail> response = restTemplate.getForEntity(url, MainSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(MainSail.builder()
                .mainSailSheet(SheetState.LOOSE)
                .traveller(TravellerState.SLIGHTLY_LUV)
                .boomVang(BoomVangState.LOOSE)
                .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                .mainSailFoot(LuffFootState.SMOOTH)
                .build()
        ));
    }

}