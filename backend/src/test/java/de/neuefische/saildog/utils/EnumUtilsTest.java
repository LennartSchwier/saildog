package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.WindState;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.fail;

class EnumUtilsTest {

    @Test
    public void testGetEnumReturnsCorrectTypeOfEnumAndValue() {
        // GIVEN
        String input = "light_wind";
        EnumUtils enumUtils = new EnumUtils();

        // WHEN
        WindState windState = enumUtils.getEnum(WindState.class, input);

        // THEN
        assertThat(windState, is(WindState.LIGHT_WIND));
    }
    @Test
    public void testGetEnumReturnsExceptionWithIncorrectInput() {
        // GIVEN
        String input = "some_nonsense";
        EnumUtils enumUtils = new EnumUtils();
        IllegalArgumentException exception = new IllegalArgumentException();

        // WHEN
        try {
            WindState windState = enumUtils.getEnum(WindState.class, input);
            fail();
        // THEN
        } catch (IllegalArgumentException e){
            // noop
        }
    }

}